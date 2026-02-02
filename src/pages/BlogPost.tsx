import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface Blog {
  id: string;
  title: string;
  content: string;
  cover_image: string | null;
  published_at: string | null;
  created_at: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, content, cover_image, published_at, created_at")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setBlog(data);
      }
      setIsLoading(false);
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-dove-teal"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-4">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-24">
        {/* Cover Image */}
        {blog.cover_image && (
          <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="container-narrow py-12">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-dove-teal transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(new Date(blog.published_at || blog.created_at), "MMMM d, yyyy")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {blog.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-dove-teal">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
