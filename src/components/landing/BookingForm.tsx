import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { openGmailCompose, THERAPIST_EMAIL } from "@/lib/gmail";
import { Send, Loader2 } from "lucide-react";

const bookingSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),
    email: z.string().trim().email("Please enter a valid email address"),
    organization: z.string().trim().optional(),
    inquiryType: z.string().min(1, "Please select an inquiry type"),
    message: z.string().trim().min(10, "Please provide some details about your needs"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
    onSuccess?: () => void;
}

const BookingForm = ({ onSuccess }: BookingFormProps) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            organization: "",
            inquiryType: "",
            message: ""
        },
    });

    const onSubmit = (data: BookingFormValues) => {
        setIsSubmitting(true);

        openGmailCompose(
            `${data.inquiryType} inquiry from ${data.name}`,
            `Hello DovesMind team,\n\nName: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.organization || "Not provided"}\n\nInquiry type: ${data.inquiryType}\n\nMessage:\n${data.message}`,
        );

        if (onSuccess) onSuccess();
        toast({
            title: "Gmail draft opened",
            description: `Review the request in Gmail and send it to ${THERAPIST_EMAIL}.`,
        });
        form.reset();
        setIsSubmitting(false);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="your@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Organization (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your organization" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="inquiryType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>I'm interested in *</FormLabel>
                                <select
                                    {...field}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    <option value="">Select an option</option>
                                    <optgroup label="Services">
                                        <option value="Online Consultation">Online Consultation</option>
                                        <option value="Recovery Support">Recovery Support</option>
                                        <option value="DovesMind AI">DovesMind AI Support</option>
                                        <option value="Family Support">Family Support Program</option>
                                    </optgroup>
                                    <optgroup label="Training Programs">
                                        <option value="Schools Training">Schools & Universities Training</option>
                                        <option value="Corporate Training">Corporate Wellness Program</option>
                                        <option value="NGO Training">NGO & Community Training</option>
                                        <option value="Government Training">Government & Institutional Training</option>
                                    </optgroup>
                                </select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tell us more about your needs *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Describe your situation or requirements..."
                                    rows={5}
                                    className="resize-none"
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
                    className="w-full bg-dove-teal hover:bg-dove-teal/90 text-white font-bold h-12 rounded-[20px]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Opening Gmail...
                        </>
                    ) : (
                        <>
                            Open Gmail & Send Request
                            <Send className="ml-2 h-5 w-5" />
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default BookingForm;
