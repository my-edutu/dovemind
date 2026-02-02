import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Cpu, TrendingUp, Calendar, Zap } from "lucide-react";
import { format, subDays, startOfDay, startOfMonth, eachDayOfInterval, eachMonthOfInterval, subMonths } from "date-fns";

interface UsageData {
  date: string;
  tokens: number;
  requests: number;
}

interface UsageStats {
  totalTokens: number;
  totalRequests: number;
  avgTokensPerRequest: number;
  dailyData: UsageData[];
  monthlyData: UsageData[];
}

const AIUsageTab = () => {
  const [stats, setStats] = useState<UsageStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsageStats();
  }, []);

  const fetchUsageStats = async () => {
    setIsLoading(true);
    
    try {
      // Fetch all usage logs
      const { data, error } = await supabase
        .from("ai_usage_logs")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;

      if (!data || data.length === 0) {
        setStats({
          totalTokens: 0,
          totalRequests: 0,
          avgTokensPerRequest: 0,
          dailyData: [],
          monthlyData: []
        });
        setIsLoading(false);
        return;
      }

      // Calculate totals
      const totalTokens = data.reduce((acc, log) => acc + (log.input_tokens || 0) + (log.output_tokens || 0), 0);
      const totalRequests = data.length;
      const avgTokensPerRequest = totalRequests > 0 ? Math.round(totalTokens / totalRequests) : 0;

      // Group by day (last 30 days)
      const last30Days = eachDayOfInterval({
        start: subDays(new Date(), 29),
        end: new Date()
      });

      const dailyData = last30Days.map(day => {
        const dayStart = startOfDay(day);
        const dayEnd = new Date(dayStart);
        dayEnd.setDate(dayEnd.getDate() + 1);
        
        const dayLogs = data.filter(log => {
          const logDate = new Date(log.created_at);
          return logDate >= dayStart && logDate < dayEnd;
        });

        return {
          date: format(day, "MMM d"),
          tokens: dayLogs.reduce((acc, log) => acc + (log.input_tokens || 0) + (log.output_tokens || 0), 0),
          requests: dayLogs.length
        };
      });

      // Group by month (last 6 months)
      const last6Months = eachMonthOfInterval({
        start: subMonths(new Date(), 5),
        end: new Date()
      });

      const monthlyData = last6Months.map(month => {
        const monthStart = startOfMonth(month);
        const monthEnd = new Date(monthStart);
        monthEnd.setMonth(monthEnd.getMonth() + 1);
        
        const monthLogs = data.filter(log => {
          const logDate = new Date(log.created_at);
          return logDate >= monthStart && logDate < monthEnd;
        });

        return {
          date: format(month, "MMM yyyy"),
          tokens: monthLogs.reduce((acc, log) => acc + (log.input_tokens || 0) + (log.output_tokens || 0), 0),
          requests: monthLogs.length
        };
      });

      setStats({
        totalTokens,
        totalRequests,
        avgTokensPerRequest,
        dailyData,
        monthlyData
      });
    } catch (error) {
      console.error("Failed to fetch usage stats:", error);
    }
    
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-dove-teal mx-auto"></div>
        </CardContent>
      </Card>
    );
  }

  if (!stats) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          <p>Failed to load usage statistics.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Tokens Used
            </CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTokens.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All-time usage</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              AI Requests
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalRequests.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total API calls</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Tokens/Request
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgTokensPerRequest.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Per conversation turn</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Usage Over Time
          </CardTitle>
          <CardDescription>Track your AI consumption patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="daily" className="space-y-4">
            <TabsList>
              <TabsTrigger value="daily">Daily (Last 30 days)</TabsTrigger>
              <TabsTrigger value="monthly">Monthly (Last 6 months)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="h-[300px]">
              {stats.dailyData.some(d => d.tokens > 0) ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.dailyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }} 
                      interval="preserveStartEnd"
                      className="fill-muted-foreground"
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      className="fill-muted-foreground"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Bar dataKey="tokens" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Tokens" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <p>No usage data yet. Start chatting to see statistics!</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="monthly" className="h-[300px]">
              {stats.monthlyData.some(d => d.tokens > 0) ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stats.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      className="fill-muted-foreground"
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      className="fill-muted-foreground"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="tokens" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--primary))' }}
                      name="Tokens"
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <p>No monthly data yet. Usage will appear here over time.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIUsageTab;