"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { type MouseEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    event.preventDefault();
    router.push("/");
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 120);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f5f7f6]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"
          onClick={handleLogoClick}
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
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? "bg-[#dcece5] text-[#28564f]" : "text-slate-600 hover:bg-[#e5efeb] hover:text-[#28564f]"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className={`hidden rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 md:inline-flex ${pathname === "/contact" ? "bg-[#dcece5] text-[#28564f]" : "bg-[#2d5d57] text-white hover:-translate-y-0.5 hover:bg-[#234a45] hover:shadow-md"}`}
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
        className={`fixed inset-0 top-18 z-40 bg-slate-900/10 transition-opacity duration-300 md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute left-4 top-4 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10 transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4b857b]">
              Navigate
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation drawer"
              className="rounded-lg p-1 text-slate-500 hover:bg-[#e5efeb]"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="pt-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href) ? "bg-[#dcece5] text-[#28564f]" : "text-slate-700 hover:bg-[#e5efeb] hover:text-[#28564f]"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`mt-1 block rounded-lg px-4 py-3 text-center text-sm font-medium transition-colors ${pathname === "/contact" ? "bg-[#dcece5] text-[#28564f]" : "bg-[#2d5d57] text-white hover:bg-[#234a45]"}`}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
