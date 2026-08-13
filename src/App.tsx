import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import TeamPage from "./pages/Team";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import ScrollToTop from "./components/ScrollToTop";

import ConsultationPage from "./pages/Consultation";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactModalProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              {/* Admin routes are temporarily disabled while Supabase is offline. */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ContactModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
