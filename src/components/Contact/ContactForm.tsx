"use client";

import { CheckCircle2, Mail, MapPin, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

const inputClassName =
  "mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#28564f]";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            Start here
          </p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            A few details are all we need to begin.
          </h2>
          <div className="mt-12 space-y-6 border-t border-[#a9c8bc] pt-6">
            <a href="mailto:hello@nexastudio.co" className="group flex gap-4">
              <Mail className="mt-0.5 size-4 text-[#4b857b]" />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Email
                </span>
                <span className="mt-2 block text-sm font-medium text-slate-700 transition-colors group-hover:text-[#28564f]">
                  hello@nexastudio.co
                </span>
              </span>
            </a>
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-4 text-[#4b857b]" />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Studio
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-700">
                  Dhaka, Bangladesh
                  <br />
                  Working worldwide
                </span>
              </span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Your name
            <input required name="name" placeholder="Your full name" className={inputClassName} />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Email address
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
              className={inputClassName}
            />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Company or brand
            <input name="company" placeholder="Company name" className={inputClassName} />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            What do you need?
            <select required name="projectType" defaultValue="" className={inputClassName}>
              <option value="" disabled>
                Select a service
              </option>
              <option>New website</option>
              <option>Website redesign</option>
              <option>Brand & web design</option>
              <option>Development support</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            Tell us a little more
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What are you looking to create or improve?"
              className={`${inputClassName} resize-y`}
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-[#2d5d57] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#234a45] hover:shadow-lg"
            >
              Send project enquiry{" "}
              <Send className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              This form is a frontend demo. No information is sent to a server.
            </p>
          </div>
        </form>
      </div>
      {isSubmitted && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 flex max-w-sm items-start gap-3 rounded-xl border border-[#a9c8bc] bg-white p-4 shadow-xl shadow-slate-900/10"
        >
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#2d5d57]" />
          <div>
            <p className="text-sm font-semibold text-slate-800">Message ready to send</p>
            <p className="mt-1 text-sm leading-5 text-slate-600">
              Thank you. In a live version, your project enquiry would now be sent to NexaStudio.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            aria-label="Close success message"
            className="rounded p-1 text-slate-500 transition-colors hover:bg-slate-100"
          >
            <X className="size-4" />
          </button>
        </div>
      )}
    </section>
  );
}
