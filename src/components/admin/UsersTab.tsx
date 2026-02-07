import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash2, ShieldCheck, User } from "lucide-react";

interface UserData {
    id: string;
    email: string;
    role: string;
    last_sign_in_at: string | null;
    created_at: string;
}

const UsersTab = () => {
    const [users, setUsers] = useState<UserData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isActionLoading, setIsActionLoading] = useState(false);
    const [newAdminId, setNewAdminId] = useState("");
    const { toast } = useToast();

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.functions.invoke("manage-users", {
                body: { action: "list_users" },
            });

            if (error) throw error;
            setUsers(data.users || []);
        } catch (error) {
            console.error("Error fetching users:", error);
            toast({
                variant: "destructive",
                title: "Failed to load users",
                description: "Could not fetch user list. Ensure the 'manage-users' function is deployed.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handlePromoteUser = async (userId: string) => {
        if (!userId) return;
        setIsActionLoading(true);
        try {
            const { error } = await supabase.functions.invoke("manage-users", {
                body: { action: "add_admin", userId },
            });

            if (error) throw error;

            toast({
                title: "Success",
                description: "User promoted to admin successfully.",
            });
            fetchUsers();
            setNewAdminId("");
        } catch (error) {
            console.error("Error promoting user:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to promote user.",
            });
        } finally {
            setIsActionLoading(false);
        }
    };

    const handleRemoveAdmin = async (userId: string) => {
        if (!confirm("Are you sure you want to remove admin privileges from this user?")) return;

        setIsActionLoading(true);
        try {
            const { error } = await supabase.functions.invoke("manage-users", {
                body: { action: "remove_admin", userId },
            });

            if (error) throw error;

            toast({
                title: "Success",
                description: "Admin privileges removed.",
            });
            fetchUsers();
        } catch (error) {
            console.error("Error removing admin:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to remove admin privileges.",
            });
        } finally {
            setIsActionLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4">Manage Admins</h3>
                <div className="flex gap-4 items-end">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">Add Admin by User ID</label>
                        <Input
                            placeholder="Enter User UUID..."
                            value={newAdminId}
                            onChange={(e) => setNewAdminId(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            To add an admin, you must first find their User ID in the table below.
                        </p>
                    </div>
                    <Button
                        onClick={() => handlePromoteUser(newAdminId)}
                        disabled={!newAdminId || isActionLoading}
                        className="mb-0.5"
                    >
                        {isActionLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4 mr-2" />}
                        Make Admin
                    </Button>
                </div>
            </div>

            <div className="bg-card rounded-lg border border-border overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead>Last Sign In</TableHead>
                            <TableHead>User ID</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8">
                                    <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
                                </TableCell>
                            </TableRow>
                        ) : users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                                                <User className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{user.email}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {user.role === "admin" ? (
                                            <Badge className="bg-dove-teal hover:bg-dove-teal/90">
                                                <ShieldCheck className="h-3 w-3 mr-1" /> Admin
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline">User</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground text-sm">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground text-sm">
                                        {user.last_sign_in_at
                                            ? new Date(user.last_sign_in_at).toLocaleDateString()
                                            : "Never"}
                                    </TableCell>
                                    <TableCell className="font-mono text-xs text-muted-foreground">
                                        {user.id}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {user.role === "admin" ? (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                                                onClick={() => handleRemoveAdmin(user.id)}
                                                disabled={isActionLoading}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handlePromoteUser(user.id)}
                                                disabled={isActionLoading}
                                            >
                                                Promote
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default UsersTab;
