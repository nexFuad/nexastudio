import BlogArticles from "@/components/Blog/BlogArticles";
import BlogCta from "@/components/Blog/BlogCta";
import BlogHero from "@/components/Blog/BlogHero";
import BlogNotes from "@/components/Blog/BlogNotes";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogArticles />
      <BlogNotes />
      <BlogCta />
    </>
  );
}
