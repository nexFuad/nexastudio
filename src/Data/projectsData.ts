export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  services: string[];
  outcome: string;
  color: string;
  image: string;
};

const projectImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85",
];

const projectEntries: Omit<Project, "image">[] = [
  {
    id: "northline",
    title: "Northline",
    category: "Architecture & Interiors",
    year: "2025",
    summary: "A calm digital home for a growing architecture practice.",
    description:
      "Northline needed a portfolio that felt as precise and considered as its spaces. We shaped a quieter visual system, clearer project storytelling, and a flexible foundation for future work.",
    services: ["Digital strategy", "Website design", "Next.js development"],
    outcome: "A clearer portfolio experience that makes the studio's work easier to explore.",
    color: "from-[#dfece7] to-[#9ebcaf]",
  },
  {
    id: "morrow",
    title: "Morrow",
    category: "Sustainable Food",
    year: "2025",
    summary: "A brighter, more useful brand experience for conscious eating.",
    description:
      "Morrow came to us with a strong mission and a growing product range. We translated its values into a warm, energetic website that makes learning and buying feel simple.",
    services: ["Brand direction", "UX & UI design", "Frontend development"],
    outcome: "A more confident launch platform for a fast-moving consumer brand.",
    color: "from-[#f1e8d8] to-[#d3b47f]",
  },
  {
    id: "aster-co",
    title: "Aster & Co.",
    category: "Lifestyle Brand",
    year: "2024",
    summary: "A considered ecommerce story with character and clarity.",
    description:
      "Aster & Co. needed a digital presence that could carry both its craft and commercial ambition. We built a flexible site that puts product detail and brand feeling side by side.",
    services: ["Content strategy", "Ecommerce design", "Development"],
    outcome: "A distinct storefront with a more engaging path to purchase.",
    color: "from-[#ece3ee] to-[#c9adca]",
  },
  {
    id: "fieldwork",
    title: "Fieldwork",
    category: "Creative Consultancy",
    year: "2024",
    summary: "A sharp identity and site for a team that solves complex problems.",
    description:
      "Fieldwork wanted to show the depth of its thinking without making things feel complicated. The result is a direct, editorial website that lets ideas lead.",
    services: ["Positioning", "Web design", "Frontend build"],
    outcome: "A clearer introduction to the consultancy's people and point of view.",
    color: "from-[#dce7ec] to-[#9fb8c6]",
  },
  {
    id: "alder",
    title: "Alder",
    category: "Wellness",
    year: "2024",
    summary: "A welcoming digital experience for everyday wellbeing.",
    description:
      "Alder's services are personal, practical, and rooted in trust. We designed a warm and structured website that helps visitors understand the offer and take the next step.",
    services: ["Discovery", "UX writing", "Website design"],
    outcome: "A more approachable path from curiosity to consultation.",
    color: "from-[#e6efdc] to-[#abc18e]",
  },
  {
    id: "verve",
    title: "Verve",
    category: "Hospitality",
    year: "2024",
    summary: "A lively restaurant story designed for discovery.",
    description:
      "Verve needed a site with the same energy as its dining room. We created a bold, easy-to-use experience for menus, bookings, and the moments in between.",
    services: ["Digital direction", "UI design", "Launch support"],
    outcome: "A brand presence that feels alive before guests walk through the door.",
    color: "from-[#f1e2d7] to-[#c98e6f]",
  },
  {
    id: "wilder",
    title: "Wilder",
    category: "Outdoor Goods",
    year: "2023",
    summary: "A grounded product experience for a brand built outside.",
    description:
      "Wilder's outdoor products needed a more confident digital home. We created a durable visual system that balances product detail, practical guidance, and brand storytelling.",
    services: ["Ecommerce strategy", "Product design", "Development"],
    outcome: "A better shopping journey across every screen size.",
    color: "from-[#e0e7da] to-[#92a77f]",
  },
  {
    id: "solace",
    title: "Solace",
    category: "Health & Care",
    year: "2023",
    summary: "A human-first website for a modern care provider.",
    description:
      "Solace wanted to make important health services feel easier to understand. We brought calm structure and clear language to every key visitor journey.",
    services: ["Information architecture", "UX design", "Accessibility review"],
    outcome: "A more reassuring experience for people seeking support.",
    color: "from-[#dcecef] to-[#92bbc1]",
  },
  {
    id: "lumen",
    title: "Lumen",
    category: "Technology",
    year: "2023",
    summary: "A focused launch site for a product with big ambitions.",
    description:
      "Lumen needed to explain a sophisticated product without losing its audience. We built a crisp narrative and interface system that makes the value feel immediate.",
    services: ["Product messaging", "Landing page design", "Development"],
    outcome: "A clearer product story built for early growth.",
    color: "from-[#e6e3f1] to-[#aaa1d0]",
  },
  {
    id: "common-room",
    title: "Common Room",
    category: "Community",
    year: "2023",
    summary: "A digital gathering place for local ideas and events.",
    description:
      "Common Room brings people together offline. Its new website needed to make discovering events, stories, and membership equally welcoming online.",
    services: ["Service design", "Web design", "CMS planning"],
    outcome: "A connected platform for a growing local community.",
    color: "from-[#f0e9d8] to-[#c8ad73]",
  },
  {
    id: "arc-studio",
    title: "Arc Studio",
    category: "Design Practice",
    year: "2022",
    summary: "A refined portfolio for a multidisciplinary creative practice.",
    description:
      "Arc Studio wanted a site that made its range feel intentional. We developed a flexible case-study system that keeps the work at the center.",
    services: ["Portfolio strategy", "Interface design", "Frontend build"],
    outcome: "A more coherent way to present a diverse body of work.",
    color: "from-[#e7e3df] to-[#b7a59a]",
  },
  {
    id: "harbor",
    title: "Harbor",
    category: "Financial Services",
    year: "2022",
    summary: "A trusted digital foundation for a growing advisory firm.",
    description:
      "Harbor's clients value practical, long-term advice. We designed a clearer, more reassuring online presence that mirrors that relationship.",
    services: ["Content strategy", "Website design", "Development"],
    outcome: "An approachable site that makes expertise feel accessible.",
    color: "from-[#dfe9ea] to-[#94b4b7]",
  },
  {
    id: "kindred",
    title: "Kindred",
    category: "Education",
    year: "2022",
    summary: "A warmer online experience for lifelong learning.",
    description:
      "Kindred needed a platform that made its programmes feel inspiring and easy to navigate. We created a more human system for content, courses, and enquiries.",
    services: ["UX research", "Design system", "Frontend development"],
    outcome: "A clearer route into learning for a wider audience.",
    color: "from-[#f2e6dc] to-[#d5a986]",
  },
  {
    id: "form-and-folk",
    title: "Form & Folk",
    category: "Homeware",
    year: "2022",
    summary: "A tactile ecommerce world for objects made with care.",
    description:
      "Form & Folk wanted its craftsmanship to come through at every step. We paired tactile visual detail with a straightforward, confident shopping experience.",
    services: ["Ecommerce direction", "Visual design", "Launch support"],
    outcome: "A brand world that feels as considered as the products themselves.",
    color: "from-[#e8e8dc] to-[#b6b58d]",
  },
  {
    id: "haven",
    title: "Haven",
    category: "Property",
    year: "2021",
    summary: "A clearer property experience for modern city living.",
    description:
      "Haven needed to make a complex property offering feel transparent and inviting. We designed a simple system for exploring spaces and taking action.",
    services: ["Customer journeys", "UX & UI design", "Development"],
    outcome: "An easier way to discover homes and understand the service.",
    color: "from-[#dfe7ed] to-[#9eb5c7]",
  },
  {
    id: "brook",
    title: "Brook",
    category: "Professional Services",
    year: "2021",
    summary: "A confident new digital presence for a specialist team.",
    description:
      "Brook had deep experience but an outdated website. We helped turn that expertise into a modern, direct, and credible digital experience.",
    services: ["Website audit", "Content design", "Web development"],
    outcome: "A stronger first impression for new client conversations.",
    color: "from-[#e4ece4] to-[#a8c2a7]",
  },
  {
    id: "atlas-works",
    title: "Atlas Works",
    category: "Construction",
    year: "2021",
    summary: "A project-led portfolio built to show scale and craft.",
    description:
      "Atlas Works needed a website that could give its completed work the space it deserved. We built a flexible portfolio with clarity at every level.",
    services: ["Digital strategy", "Portfolio design", "Development"],
    outcome: "A more compelling showcase for a growing body of work.",
    color: "from-[#e9e5df] to-[#c0ae9c]",
  },
  {
    id: "sunday",
    title: "Sunday",
    category: "Culture & Events",
    year: "2021",
    summary: "A fresh digital identity for a culture-led events programme.",
    description:
      "Sunday brings together people, ideas, and experiences. Its site needed the same sense of movement, warmth, and easy discovery.",
    services: ["Creative direction", "Website design", "Build support"],
    outcome: "A lively online home for an evolving cultural programme.",
    color: "from-[#eee3e3] to-[#cfaaaa]",
  },
];

export const projectsData: Project[] = projectEntries.map((project, index) => ({
  ...project,
  image: projectImages[index % projectImages.length],
}));

export const getProjectById = (id: string) => projectsData.find((project) => project.id === id);
