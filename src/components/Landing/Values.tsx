import { HeartHandshake, Lightbulb, Target } from "lucide-react";

const values = [
  [
    Target,
    "Purpose before pixels",
    "Every decision starts with what the work needs to accomplish.",
  ],
  [
    Lightbulb,
    "Curiosity in the details",
    "We ask thoughtful questions and make space for the ideas that make a difference.",
  ],
  [
    HeartHandshake,
    "A true creative partner",
    "Open communication, shared momentum, and a process built around your team.",
  ],
];

export default function Values() {
  return (
    <section className="bg-[#2d5d57] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-[#bcd9cf]">How we work</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A studio with high standards and a human approach.
        </h2>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {values.map(([Icon, title, text]) => {
            const ValueIcon = Icon as typeof Target;
            return (
              <div key={title as string} className="border-t border-white/25 pt-6">
                <ValueIcon className="size-5 text-[#bcd9cf]" />
                <h3 className="mt-5 text-lg font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d9e8e2]">{text as string}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
