import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const applySchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, { message: "Name must be at least 2 characters" }),
    email: z
        .string()
        .trim()
        .email({ message: "Please enter a valid email address" }),
    phone: z
        .string()
        .trim()
        .min(5, { message: "Please enter a valid phone number" }),
    role: z
        .string()
        .trim()
        .min(2, { message: "Please specify the role you are applying for" }),
    message: z
        .string()
        .trim()
        .min(10, { message: "Please provide some brief information about your background" }),
});

type ApplyFormValues = z.infer<typeof applySchema>;

interface ApplyFormProps {
    onSuccess?: () => void;
}

const ApplyForm = ({ onSuccess }: ApplyFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<ApplyFormValues>({
        resolver: zodResolver(applySchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            role: "",
            message: "",
        },
    });

    const onSubmit = async (data: ApplyFormValues) => {
        setIsSubmitting(true);

        try {
            const { error } = await supabase.functions.invoke("send-contact", {
                body: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: `[Job Application - ${data.role}]\n\n${data.message}`,
                },
            });

            if (error) throw error;

            if (onSuccess) onSuccess();

            toast({
                title: "Application submitted!",
                description: "Thank you for your interest. Our HR team will review your application and get back to you.",
            });

            form.reset();
        } catch (error: any) {
            console.error("Apply form error:", error);
            toast({
                title: "Submission failed",
                description: "Please try again or contact us directly at dovesmindsynergy@gmail.com",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="+(234)..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Role Applying For *</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Counselor, Outreach Officer, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Brief Background / Why join us? *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a bit about yourself..."
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-dove-teal text-white hover:bg-dove-teal/90 font-bold h-12 rounded-[20px]"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-5 w-5" />
                            Submit Application
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ApplyForm;
