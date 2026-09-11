export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
};

export const blogData: BlogPost[] = [
  {
    slug: "what-makes-a-website-feel-premium",
    title: "What makes a small business website feel truly premium?",
    excerpt:
      "It is rarely about adding more. It is about making the right things feel clear, intentional, and easy to use.",
    category: "Design thinking",
    date: "May 18, 2025",
    readTime: "6 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A premium website is not defined by visual decoration alone. It comes from the feeling that every choice has a reason: the language is direct, the navigation is calm, and the visual details support the message instead of competing with it.",
      "For small businesses, this matters even more. Your website often has to make a first impression, explain what you do, and build trust in just a few moments. The goal is not to look bigger than you are. It is to look clear about who you are.",
      "Start with the essentials. A focused message, a strong visual system, and a simple path to contact can do more for your brand than a crowded page full of features.",
    ],
  },
  {
    slug: "signs-it-is-time-to-rethink-your-website",
    title: "Five signs it is time to rethink your digital presence",
    excerpt:
      "A website should grow with your business. Here is how to spot when the current one is holding you back.",
    category: "Strategy",
    date: "April 29, 2025",
    readTime: "5 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Your website does not need a complete redesign every year. But it should continue to reflect where your business is now, not where it was when the site first launched.",
      "If you struggle to explain your services, if visitors ask questions the website should answer, or if your team avoids sharing the link, those are useful signals. They show that the experience is no longer doing its job.",
      "A good redesign begins with understanding what has changed. The best next step is usually a clearer message and a more useful structure—not simply a new surface.",
    ],
  },
  {
    slug: "how-to-plan-a-website-project",
    title: "A clearer way to plan your next website project",
    excerpt:
      "The strongest projects start before design begins—with the right questions, roles, and shared expectations.",
    category: "Process",
    date: "April 11, 2025",
    readTime: "7 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Website projects become easier when everyone knows what the website needs to achieve. That sounds simple, but it changes the quality of every later decision.",
      "Before you think about page layouts, define the audience, the business goal, the people involved, and the content you already have. This gives the creative process a useful foundation.",
      "A clear plan leaves room for good ideas. It does not make the project rigid; it makes the work more focused and collaborative.",
    ],
  },
  {
    slug: "why-content-structure-matters",
    title: "Why content structure matters as much as visual design",
    excerpt:
      "The best website design cannot rescue a message that is difficult to follow. Structure is where clarity starts.",
    category: "Content",
    date: "March 22, 2025",
    readTime: "4 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Visitors do not read a website from top to bottom. They scan, compare, and look for the details that matter to them. Good content structure gives them a clear route through that process.",
      "It means putting the important idea first, grouping related information, and using language that feels specific to your business. It also means leaving out what does not need to be there.",
      "When content and design work together, the result feels lighter and more confident—even when it contains a lot of information.",
    ],
  },
  {
    slug: "designing-for-trust",
    title: "Designing for trust: the details people notice",
    excerpt:
      "Trust is built through dozens of small signals. A website can either strengthen them or quietly undermine them.",
    category: "Design thinking",
    date: "March 4, 2025",
    readTime: "5 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Trust is rarely created by one dramatic moment. It comes from the feeling that a business is clear, consistent, and attentive to the people it serves.",
      "On a website, that feeling is shaped by typography, responsive behaviour, sensible navigation, accurate information, and a contact path that feels straightforward.",
      "The smallest details often communicate the biggest things. They tell visitors whether the business behind the screen has taken the time to think about their experience.",
    ],
  },
  {
    slug: "building-a-flexible-design-system",
    title: "Building a website system your team can grow with",
    excerpt:
      "A useful website should make future updates easier, not create a new dependency every time something changes.",
    category: "Development",
    date: "February 17, 2025",
    readTime: "6 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A website is not only a collection of pages. It is a system of reusable decisions: type, spacing, components, content patterns, and interactions that work together.",
      "When that system is well designed, your team can add new content without losing the feeling of the original site. It gives the business more confidence to keep moving after launch.",
      "Flexibility does not mean every page looks the same. It means there is a shared foundation that makes good choices easier to repeat.",
    ],
  },
  {
    slug: "the-value-of-a-small-studio",
    title: "The value of working with a small digital studio",
    excerpt:
      "A smaller team can bring more focus, closer collaboration, and a better connection between thinking and execution.",
    category: "Studio notes",
    date: "January 28, 2025",
    readTime: "4 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    content: [
      "The best team size depends on the work. For many brand and website projects, a small senior team brings a useful balance of focus and range.",
      "You speak directly with the people shaping the strategy, design, and build. Decisions move faster, communication stays clear, and the project keeps its original intent.",
      "At NexaStudio, that closeness is part of the offer. We want the work to feel collaborative from the first conversation to the final launch.",
    ],
  },
  {
    slug: "writing-homepage-copy",
    title: "How to write homepage copy that gets to the point",
    excerpt:
      "Good homepage copy does not try to say everything. It gives visitors the right reason to keep going.",
    category: "Content",
    date: "January 12, 2025",
    readTime: "5 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Homepage copy has a difficult job. It needs to introduce your business, make the value clear, and create enough interest for a visitor to take the next step.",
      "The strongest version is specific and direct. Start with the problem you solve and the people you help. Then give visitors a clear path to learn more.",
      "Clarity is not about using fewer words. It is about giving every word a useful purpose.",
    ],
  },
  {
    slug: "why-responsive-design-still-matters",
    title: "Why responsive design still matters more than ever",
    excerpt:
      "A responsive site is not simply a smaller desktop page. It is a considered experience for every context.",
    category: "Development",
    date: "December 18, 2024",
    readTime: "5 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85",
    content: [
      "People use websites in many different places and moments. A responsive experience respects that by making the key information easy to find and act on at every size.",
      "Good responsive design starts with content priorities. What should a visitor see first? What can be simplified? What needs more space to be understood?",
      "The answer is not to make everything smaller. It is to make the experience more intentional.",
    ],
  },
  {
    slug: "from-brief-to-launch",
    title: "From brief to launch: what a good web partnership looks like",
    excerpt:
      "The best projects are built on shared context, clear roles, and honest conversations from the beginning.",
    category: "Process",
    date: "November 26, 2024",
    readTime: "6 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A good project partnership is more than a scope document. It is a working rhythm that keeps decisions clear and makes room for the right conversations.",
      "The client brings business knowledge and ambition. The studio brings perspective, craft, and a structured way of moving the work forward.",
      "When those roles are respected, the final website feels more connected to the people who need to use it.",
    ],
  },
  {
    slug: "the-case-for-fewer-better-pages",
    title: "The case for fewer, better website pages",
    excerpt:
      "More pages do not always create more value. A focused site can be easier to understand and easier to maintain.",
    category: "Strategy",
    date: "November 8, 2024",
    readTime: "4 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    content: [
      "It can be tempting to add a page for every possible topic. But too much information can make it harder for visitors to understand what matters most.",
      "A more focused structure helps the strongest ideas stand out. It also gives your team a website that is easier to keep current.",
      "Start with the journeys people actually need. Then build only the pages that help those journeys move forward.",
    ],
  },
  {
    slug: "making-design-decisions-with-confidence",
    title: "Making design decisions with more confidence",
    excerpt:
      "Useful design feedback starts with the goal, not with whether something feels familiar or different.",
    category: "Design thinking",
    date: "October 21, 2024",
    readTime: "5 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Design review can feel subjective when the team has not agreed on what the work needs to achieve. A clear goal gives feedback something useful to return to.",
      "Ask whether the idea makes the message clearer, whether it supports the audience, and whether it feels true to the business.",
      "That changes the conversation from personal taste to a shared decision about what will work best.",
    ],
  },
  {
    slug: "a-guide-to-website-maintenance",
    title: "A practical guide to keeping your website current",
    excerpt:
      "A website is more useful when it is cared for after launch. Small regular updates can make a meaningful difference.",
    category: "Development",
    date: "October 3, 2024",
    readTime: "4 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Launching a website is the start of a new phase, not the finish line. Your business, projects, and audience questions will keep changing.",
      "A simple maintenance rhythm helps you keep important content accurate and gives visitors a reason to return.",
      "Review the essentials regularly: services, project work, team information, and the paths people use to get in touch.",
    ],
  },
  {
    slug: "building-a-brand-people-remember",
    title: "Building a brand people remember after they leave your site",
    excerpt:
      "Memorable brands are not louder. They are more consistent, more specific, and more human.",
    category: "Studio notes",
    date: "September 14, 2024",
    readTime: "6 min read",
    author: "NexaStudio",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A memorable brand has a clear point of view. It knows what it wants people to understand and gives that idea a consistent visual and verbal shape.",
      "Consistency does not mean repetition. It means the same underlying character appears in different places and formats.",
      "A website is one of the strongest places to make that character felt, because it gives people time to explore it at their own pace.",
    ],
  },
];

export const getBlogPostBySlug = (slug: string) => blogData.find((post) => post.slug === slug);
