
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Trash2, Mail, Phone, Calendar, Eye } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

interface ContactSubmission {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    type: string;
    status: "new" | "read" | "responded";
}

export const MessagesTab = () => {
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
    const { toast } = useToast();

    const fetchSubmissions = async () => {
        try {
            const { data, error } = await supabase
                .from("contact_submissions" as any)
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setSubmissions((data as unknown as ContactSubmission[]) || []);
        } catch (error) {
            console.error("Error fetching submissions:", error);
            toast({
                title: "Error",
                description: "Failed to load messages",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!confirm("Are you sure you want to delete this message?")) return;

        try {
            const { error } = await supabase
                .from("contact_submissions" as any)
                .delete()
                .eq("id", id);

            if (error) throw error;

            setSubmissions(submissions.filter((s) => s.id !== id));
            toast({
                title: "Message deleted",
                description: "The submission has been removed.",
            });
            if (selectedSubmission?.id === id) setSelectedSubmission(null);
        } catch (error) {
            console.error("Error deleting submission:", error);
            toast({
                title: "Error",
                description: "Failed to delete message",
                variant: "destructive",
            });
        }
    };

    const handleView = async (submission: ContactSubmission) => {
        setSelectedSubmission(submission);

        // Mark as read if status is 'new'
        if (submission.status === 'new') {
            try {
                const { error } = await supabase
                    .from("contact_submissions" as any)
                    .update({ status: 'read' })
                    .eq('id', submission.id);

                if (!error) {
                    setSubmissions(prev => prev.map(s =>
                        s.id === submission.id ? { ...s, status: 'read' } : s
                    ));
                }
            } catch (err) {
                console.error("Error updating status:", err);
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-dove-teal" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Form Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {submissions.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        No messages found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                submissions.map((submission) => (
                                    <TableRow
                                        key={submission.id}
                                        className="cursor-pointer hover:bg-muted/50"
                                        onClick={() => handleView(submission)}
                                    >
                                        <TableCell className="whitespace-nowrap">
                                            {format(new Date(submission.created_at), "MMM d, yyyy")}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{submission.name}</span>
                                                <span className="text-xs text-muted-foreground">{submission.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{submission.type || 'General'}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            {submission.status === 'new' && <Badge className="bg-dove-teal">New</Badge>}
                                            {submission.status === 'read' && <Badge variant="secondary">Read</Badge>}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                                                onClick={(e) => handleDelete(submission.id, e)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Message Details</DialogTitle>
                        <DialogDescription>
                            Received on {selectedSubmission && format(new Date(selectedSubmission.created_at), "PPP p")}
                        </DialogDescription>
                    </DialogHeader>

                    {selectedSubmission && (
                        <div className="space-y-6 mt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Users className="h-4 w-4" /> Name
                                    </label>
                                    <p className="font-medium">{selectedSubmission.name}</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Mail className="h-4 w-4" /> Email
                                    </label>
                                    <a href={`mailto:${selectedSubmission.email}`} className="font-medium text-dove-teal hover:underline block truncate">
                                        {selectedSubmission.email}
                                    </a>
                                </div>
                                {selectedSubmission.phone && (
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                            <Phone className="h-4 w-4" /> Phone
                                        </label>
                                        <a href={`tel:${selectedSubmission.phone}`} className="font-medium hover:underline block">
                                            {selectedSubmission.phone}
                                        </a>
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Tag className="h-4 w-4" /> Type
                                    </label>
                                    <p className="font-medium">{selectedSubmission.type || 'General Inquiry'}</p>
                                </div>
                            </div>

                            <div className="space-y-2 bg-muted/30 p-4 rounded-lg border">
                                <label className="text-sm font-medium text-muted-foreground block">Message Content</label>
                                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                                    {selectedSubmission.message}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setSelectedSubmission(null)}>
                                    Close
                                </Button>
                                <Button asChild className="bg-dove-teal hover:bg-dove-teal/90">
                                    <a href={`mailto:${selectedSubmission.email}?subject=Re: Your inquiry to DovesMind Synergy`}>
                                        <Mail className="mr-2 h-4 w-4" /> Reply via Email
                                    </a>
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

// Start Icon Component for fixing missing Users/Tag definition
function Users(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function Tag(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7-7a2 2 0 0 0 0-2.828l-5-5z" />
            <path d="M7 7h.01" />
        </svg>
    );
}
