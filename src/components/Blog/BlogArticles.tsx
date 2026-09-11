"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { blogData } from "@/Data/blogData";
import Pagination from "@/components/Shared/Pagination";

const postsPerPage = 6;

export default function BlogArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const displayedPosts = blogData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  const changePage = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById("blog-articles")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="blog-articles"
      className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
              Latest articles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
              Studio insights, made useful.
            </h2>
          </div>
          <p className="text-sm text-slate-500">{blogData.length} articles</p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {displayedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-[#b7d1c7] pb-7"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4b857b]">
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-3xl">
                    {post.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-[#28564f] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <p className="mt-5 text-xs text-slate-500">{post.date}</p>
            </Link>
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={changePage} />
      </div>
    </section>
  );
}
