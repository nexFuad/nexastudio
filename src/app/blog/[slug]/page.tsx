import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogData, getBlogPostBySlug } from "@/Data/blogData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <article className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Back to
            journal
          </Link>
          <header className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
              {post.category} · {post.readTime}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-slate-800 sm:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>
            <p className="mt-7 text-sm text-slate-500">
              By {post.author} · {post.date}
            </p>
          </header>
          <div className="relative mx-auto mt-14 aspect-[16/8] max-w-6xl overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </article>
      <article className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            The article
          </p>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <section className="bg-[#315e56] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Need help putting these ideas into practice?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#28564f] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Talk to NexaStudio{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
