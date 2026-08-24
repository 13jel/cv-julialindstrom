// ============================================================
//  EDIT HERE.
// ============================================================

export const profile = {
  name: "Julia Lindström",
  title: "Fullstack Developer",
  tagline: "I build fast, reliable web apps end to end.",
  location: "Sundsvall, Sweden",
  email: "juliaelindstrom@outlook.com",
  photo: "/me.png",
  photoAlt: "Julia Lindström",
  // Remove any link you don't want — it just won't render.
  links: {
    github: "https://github.com/13jel",
    linkedin: "https://www.linkedin.com/in/juliaelindstrom",
    //website: "https://yourdomain.com",
  },
  bio: [
    "I'm a fullstack developer in the making, currently studying at Medieinstitutet. I'm drawn to the intersection of technical craft and human experience — writing code that doesn't just function, but feels intuitive and welcoming to everyone who uses it.",
    "Accessibility is at the heart of how I think about design and development. I believe that technology should be inclusive and empowering, and I strive to create digital experiences that are not only functional but also welcoming to all users. Whether it's through semantic HTML, thoughtful ARIA attributes, or ensuring keyboard navigability, I am committed to making the web a more accessible place for everyone.",
  ],
};

// Each project gets a card. `live` is the Vercel/deployed URL recruiters click.
export const projects = [
  {
    name: "Mindra App",
    blurb: "Currently ongoing private project where I'm building a NPF friendly training app with pain tracking and AI analysis to recommend personalized exercises from day to day.",
    live: "https://mindra-app.vercel.app/today",
    repo: "https://github.com/13jel/mindra.app.git",
    stack: ["Next.js", "Supabase", "TypeScript", "CSS", "HTML"],
    featured: true,
  },
  {
    name: "The Rooted Pages",
    blurb: "The Rooted Pages — An individually built fullstack e-commerce platform with admin panel, role-based auth, and database-backed cart and orders.",
    live: "https://the-rooted-pages.vercel.app/",
    repo: "https://github.com/13jel/trp-backend.git",
    stack: ["React", "Vite", "Express", "TypeScript", "Supabase", "Vercel", "Render", "CSS", "HTML"],
    featured: true,
  },
  {
    name: "Contact List",
    blurb: "Individual school project where I built a contact list app.",
    live: "https://contactlist-beryl.vercel.app/",
    repo: "https://github.com/13jel/contact.list",
    stack: ["JavaScript", "CSS", "HTML"],
    featured: true,
  },
  {
    name: "Receptsamlingen",
    blurb: "Group project where we built a contact list app.",
    live: "https://receptsamlingen.vercel.app/",
    repo: "https://github.com/Harald-Wallin/Frameworks_GroupProj.git",
    stack: ["React", "JavaScript", "CSS", "HTML"],
    featured: true,
  },
  {
    name: "Meal Explorer",
    blurb: "Individual school project where I built a meal explorer app.",
    live: "https://mealexplorer-one.vercel.app/",   // deployed link
    repo: "https://github.com/13jel/meal.explorer", // optional
    stack: ["JavaScript", "CSS", "HTML"],
    featured: false, // featured projects show larger, at the top
  },
  {
    name: "Sorken",
    blurb: "Group project where we built a game with JavaScript.",
    live: "https://sorken.vercel.app/",   // deployed link
    repo: "https://github.com/niloscar/Sorken", // optional
    stack: ["JavaScript", "CSS", "HTML"],
    featured: false, // featured projects show larger, at the top
  },
];
// Group your skills however you like. Add or remove categories freely.
export const skills = [
  { group: "Frontend", items: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Vue"] },
  { group: "Backend", items: ["Node.js", "Express", "TypeScript", "Python", "REST", "GraphQL"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Row Level Security", "Redis", "Prisma"] },
  { group: "Tooling", items: ["Git", "Vercel", "Render", "CI/CD"] },
];

// Newest first.
export const experience = [
  {
    role: "Studiestödsutredare",
    company: "Centrala Studiestödsnämnden, CSN",
    period: "2022 — Present",
    points: [
      "I work as a studiestödsutredare at CSN, where I handle applications for student financial aid. My role involves assessing applicants' eligibility based on their educational background and financial situation, ensuring compliance with regulations, and providing support to students throughout the application process. This position has honed my analytical skills and attention to detail, as well as my ability to communicate complex information clearly and empathetically.",
    ],
  },
  {
    role: "Arbetsförmedlare",
    company: "Arbetsförmedlingen",
    period: "2020 — 2022",
    points: [
      "As an arbetsförmedlare at Arbetsförmedlingen, I provided guidance on career development. I conducted one-on-one consultations to understand clients' skills, experience, and job preferences. This role required strong interpersonal skills, the ability to navigate a complex job market, and a commitment to helping individuals achieve their career goals.",
    ],
  },
];

export const education = [
  {
    school: "Medieinstitutet",
    detail: "Fullstack Developer Program",
    period: "2025 — 2027",
  },
  {
    school: "Mid Sweden University, MIUN",
    detail: "Degree of Bachelor of Science with a major in Occupational Health Science",
    period: "2016 — 2019",
  },
];
