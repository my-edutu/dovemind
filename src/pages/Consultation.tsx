import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import BookingForm from "@/components/landing/BookingForm";
import { ArrowLeft, MessageCircle, Calendar, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultationPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-dove-teal to-dove-teal/90 text-primary-foreground">
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Start Your Journey to Wellness
                        </h1>
                        <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                            Book a confidential consultation with our professional team.
                            We're here to provide the support and guidance you need.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-narrow">
                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Form Column - order 1 on mobile, 2 on lg */}
                        <div className="lg:col-span-3 lg:order-2 order-1">
                            <div className="bg-card rounded-3xl shadow-sm overflow-hidden border-none text-left">
                                <div className="bg-muted/30 p-6 border-b border-border">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-dove-teal" />
                                        <h3 className="font-bold text-xl">Consultation Request</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Please fill the form details and we will contact you shortly.</p>
                                </div>
                                <div className="p-0 sm:p-2">
                                    <BookingForm />
                                </div>
                            </div>
                        </div>

                        {/* Info Column - order 2 on mobile, 1 on lg */}
                        <div className="lg:col-span-2 space-y-10 lg:order-1 order-2">
                            {/* Why Consult - desktop only */}
                            <div className="hidden lg:block">
                                <h2 className="text-3xl font-bold text-foreground mb-6 text-left">Why Consult with Us?</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-dove-teal/10 flex items-center justify-center shrink-0">
                                            <Shield className="h-6 w-6 text-dove-teal" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg mb-1">Strict Confidentiality</h3>
                                            <p className="text-muted-foreground text-sm">Your privacy is our priority. All sessions and data are handled with maximum security.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-dove-teal/10 flex items-center justify-center shrink-0">
                                            <Users className="h-6 w-6 text-dove-teal" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg mb-1">Expert Professionals</h3>
                                            <p className="text-muted-foreground text-sm">Access to clinical psychologists, counselors, and addiction specialists.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-dove-teal/10 flex items-center justify-center shrink-0">
                                            <MessageCircle className="h-6 w-6 text-dove-teal" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg mb-1">AI-Enhanced Support</h3>
                                            <p className="text-muted-foreground text-sm">Preliminary support and continuous tracking via DovesMind AI.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Urgent Help - now moves below form on mobile */}
                            <div className="bg-secondary/30 p-8 rounded-3xl border-none text-left">
                                <h3 className="font-bold text-xl mb-4">Urgent Help</h3>
                                <p className="text-muted-foreground mb-6">If you are experiencing a mental health emergency, please reach out to our hotlines immediately.</p>
                                <div className="space-y-2 font-bold text-dove-teal">
                                    <p>+234 810-334-4191</p>
                                    <p>+234 810-244-3104</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ConsultationPage;
