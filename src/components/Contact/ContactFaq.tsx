const questions = [
  [
    "What should I include in my enquiry?",
    "A little context about your business, what you want to achieve, and any target timeline is enough for a useful first conversation.",
  ],
  [
    "Do you work with teams outside Bangladesh?",
    "Yes. NexaStudio works remotely with clients in different locations and structures projects around clear, regular communication.",
  ],
  [
    "Can you help with an existing website?",
    "Absolutely. We can review your current site, identify the opportunities, and recommend a focused next step.",
  ],
];

export default function ContactFaq() {
  return (
    <section className="bg-[#315e56] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bcd9cf]">
            Before we talk
          </p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
            A few helpful answers.
          </h2>
        </div>
        <div className="divide-y divide-white/20 border-y border-white/20">
          {questions.map(([question, answer], index) => (
            <article key={question} className="py-6">
              <p className="text-sm font-semibold text-[#bcd9cf]">0{index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold">{question}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d6e5df]">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
