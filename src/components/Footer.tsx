import Link from "next/link";
import { ArrowUpRight, AtSign, Globe, Send } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
];

const socialLinks = [
  { label: "Website", Icon: Globe },
  { label: "Email", Icon: AtSign },
  { label: "Message", Icon: Send },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#eaf1ee] text-slate-700">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"
            >
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#2d5d57] text-sm font-bold text-white">
                N
              </span>
              Nexa<span className="text-[#4b857b]">Studio</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Thoughtful digital experiences crafted for ideas that deserve to grow.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-800">Explore</h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-[#28564f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-800">Start a project</h2>
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#28564f] transition-colors hover:text-[#183c37]"
            >
              Tell us about your idea{" "}
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-slate-300 bg-[#f8faf9] text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#80a99f] hover:text-[#28564f] hover:shadow-sm"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-300/70 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NexaStudio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
