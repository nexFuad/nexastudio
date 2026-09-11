"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f5f7f6]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#2d5d57] text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            N
          </span>
          Nexa<span className="text-[#4b857b]">Studio</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[#e5efeb] hover:text-[#28564f]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-[#2d5d57] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#234a45] hover:shadow-md md:inline-flex"
        >
          Let&apos;s talk
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-[#e5efeb] md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="mx-5 mb-4 rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50 sm:mx-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#e5efeb] hover:text-[#28564f]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 block rounded-lg bg-[#2d5d57] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#234a45]"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
