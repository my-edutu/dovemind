import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, MessageSquare, FileText, Users, Eye, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import ChatSessionsTab from "@/components/admin/ChatSessionsTab";
import BlogsTab from "@/components/admin/BlogsTab";
import AIUsageTab from "@/components/admin/AIUsageTab";
import logoImage from "@/assets/logo-dovesmind.png";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ chatSessions: 0, blogs: 0 });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin/login");
        return;
      }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (!roles) {
        await supabase.auth.signOut();
        navigate("/admin/login");
        return;
      }

      // Fetch stats
      const [chatResult, blogResult] = await Promise.all([
        supabase.from("chat_sessions").select("id", { count: "exact", head: true }),
        supabase.from("blogs").select("id", { count: "exact", head: true }),
      ]);

      setStats({
        chatSessions: chatResult.count || 0,
        blogs: blogResult.count || 0,
      });

      setIsLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        navigate("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dove-teal"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-dove-blue-dark border-b border-dove-blue-light/20">
        <div className="container-narrow py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="DovesMind Logo" className="h-10 w-10 object-contain" />
            <div>
              <span className="text-lg font-bold text-primary-foreground">DovesMind</span>
              <span className="text-lg font-light text-accent"> Admin</span>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container-narrow py-8">
        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Chat Sessions
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.chatSessions}</div>
              <p className="text-xs text-muted-foreground">Total user conversations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Blog Posts
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.blogs}</div>
              <p className="text-xs text-muted-foreground">Published articles</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Quick Actions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Button
                size="sm"
                className="w-full bg-dove-teal hover:bg-dove-teal/90"
                onClick={() => window.open("/", "_blank")}
              >
                <Eye className="h-4 w-4 mr-2" />
                View Site
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="chats" className="space-y-4">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="chats">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chats
              </TabsTrigger>
              <TabsTrigger value="blogs">
                <FileText className="h-4 w-4 mr-2" />
                Blogs
              </TabsTrigger>
              <TabsTrigger value="usage">
                <Cpu className="h-4 w-4 mr-2" />
                AI Usage
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chats">
              <ChatSessionsTab />
            </TabsContent>
            <TabsContent value="blogs">
              <BlogsTab />
            </TabsContent>
            <TabsContent value="usage">
              <AIUsageTab />
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;
