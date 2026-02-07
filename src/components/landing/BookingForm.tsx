import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";

const BookingForm = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        inquiryType: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase.functions.invoke("send-contact", {
                body: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.organization,
                    message: `[${formData.inquiryType} Inquiry]\n\nOrganization: ${formData.organization}\n\n${formData.message}`
                },
            });

            if (error) throw error;

            toast({
                title: "Request submitted!",
                description: "We'll get back to you within 24 hours.",
            });

            setFormData({
                name: "",
                email: "",
                organization: "",
                inquiryType: "",
                message: ""
            });
        } catch (error) {
            toast({
                title: "Failed to submit",
                description: "Please try again or contact us directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="organization">Organization (if applicable)</Label>
                    <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Your organization"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="inquiryType">I'm interested in *</Label>
                    <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
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
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Tell us more about your needs</Label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your situation or requirements..."
                    rows={5}
                />
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full bg-dove-teal hover:bg-dove-teal/90 text-primary-foreground"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    "Submitting..."
                ) : (
                    <>
                        Submit Request
                        <Send className="ml-2 h-5 w-5" />
                    </>
                )}
            </Button>
        </motion.form>
    );
};

export default BookingForm;
