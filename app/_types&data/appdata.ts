import {
  Experience,
  MenuItems,
  Project,
  ProjectTypes,
  SizeConfigure,
  Skill,
} from "./type";

export const items: MenuItems[] = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/portfolio" },
  { title: "Resume", link: "/resume" },
  { title: "Skills", link: "/skills" },
  { title: "Contact", link: "/contact" },
];

export const sizeConfig: SizeConfigure = {
  sm: {
    imageRatio: "pt-[50%]",
    padding: "p-3",
    titleSize: "text-md",
    descriptionLines: "line-clamp-2",
    tagSize: "text-xs px-1.5 py-0.5",
    iconSize: "h-3 w-3",
  },
  md: {
    imageRatio: "pt-[56.25%]",
    padding: "p-4",
    titleSize: "text-lg",
    descriptionLines: "line-clamp-3",
    tagSize: "text-xs px-2 py-0.5",
    iconSize: "h-3.5 w-3.5",
  },
  lg: {
    imageRatio: "pt-[60%]",
    padding: "p-5",
    titleSize: "text-xl",
    descriptionLines: "line-clamp-4",
    tagSize: "text-sm px-2.5 py-1",
    iconSize: "h-4 w-4",
  },
  xl: {
    imageRatio: "pt-[62.5%]",
    padding: "p-6",
    titleSize: "text-2xl",
    descriptionLines: "line-clamp-5",
    tagSize: "text-sm px-3 py-1",
    iconSize: "h-4 w-4",
  },
};

export const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "Flet",
    description:
      "Find your perfect home with a modern and seamless property browsing experience.",
    tags: ["Next.js", "React", "TailwindCSS", "React-icons", "TypeSCript"],
    image: "/flet.png",
  },
  {
    id: 2,
    title: "Kiva",
    description:
      "Connect instantly with friends and colleagues. Fast, secure, and built for modern conversations.",
    tags: [
      "Vite",
      "React",
      "Clerk",
      "Firestore",
      "Tailwindcss",
      "React-router",
      "Supabase",
    ],
    image: "/kivaa.png",
  },
  {
    id: 3,
    title: "Loka",
    description:
      "Find your perfect home with a modern and seamless property browsing experience.",
    tags: ["React", "Next.js", "Tailwindcss", "Lucide-React", "TypeScript"],
    image: "/loka.png",
  },

  {
    id: 4,
    title: "Àṣàfé",
    description:
      "A local-first PWA that lets you post, read, and sync content offline with Dexie and Supabase when back online.",
    tags: [
      "Vite",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Dexie",
      "IndexedDB",
      "Supabase",
      "Service Worker",
    ],
    image: "/asafe.png",
  },
  {
    id: 5,
    title: "Ìtàn",
    description:
      "Making Nigerian history interactive and accessible through timelines and shared stories.",
    tags: ["React", "Next.js", "Tailwindcss", "Firebase", "TypeScript"],
    image: "/itan.png",
  },

  {
    id: 6,
    title: "Rivo",
    description:
      "Conversational AI that understands you. Get instant answers, personalized recommendations, and 24/7 assistance.",
    tags: [
      "Vite",
      "React",
      "Heroicons",
      "Tailwindcss",
      "React-router",
      "Grok API",
    ],
    image: "/rivopic.png",
  },
  {
    id: 7,
    title: "Fast Pizza Co.",
    description:
      "Crave it. Tap it. Get your favorite pizza delivered hot and fresh.",
    tags: ["Vite", "React", "Redux", "Tailwindcss", "React-router"],
    image: "/piz.png",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Flet",
    description:
      "Style redefined. Discover modern fashion that blends comfort and confidence.",
    longDescription:
      "A contemporary fashion brand website crafted with simplicity and elegance. Flet emphasizes clean visuals, effortless navigation, and a seamless shopping experience that captures modern style.",
    tags: ["Next.js", "React", "TailwindCSS", "React-icons", "TypeSCript"],
    image: "/flet.png",
    features: [
      "Product showcase",
      "Cart functionality",
      "Responsive design",
      "Minimalist interface",
    ],
    githubUrl: "https://github.com/constantine950/flet-ecommerce",
    liveUrl: "https://flet-ecommerce.vercel.app",
  },
  {
    id: 2,
    title: "Kiva",
    description:
      "Chat smarter. Stay connected with friends and colleagues in real time.",
    longDescription:
      "A modern chat application with authentication, instant messaging, and real-time syncing. Built with performance and simplicity in mind for a seamless communication experience.",
    tags: [
      "Vite",
      "React",
      "Clerk",
      "Firestore",
      "Tailwindcss",
      "React-router",
      "Supabase",
    ],
    image: "/kivaa.png",
    features: [
      "User authentication",
      "Instant messaging",
      "Real-time message syncing",
      "Friend management",
      "Responsive design",
    ],
    githubUrl: "https://github.com/constantine950/kiva-chatapp",
    liveUrl: "https://kiva-chatapp.vercel.app/",
  },
  {
    id: 3,
    title: "Loka",
    description:
      "Find your perfect home with a modern and seamless property browsing experience.",
    longDescription:
      "A real estate platform for browsing homes and apartments for sale or rent. Offers property listing, property details, and a smooth, user-friendly interface for discovering ideal properties.",
    tags: ["React", "Next.js", "Tailwindcss", "Lucide-React", "TypeScript"],
    image: "/loka.png",
    features: [
      "Property listing and details",
      "Detailed property pages",
      "Contact Agent",
      "Responsive modern UI",
    ],
    githubUrl: "https://github.com/constantine950/loka-real-estate",
    liveUrl: "https://loka-real-estate.vercel.app/",
  },
  {
    id: 4,
    title: "Àṣàfé",
    description: "Share and sync posts seamlessly, even offline.",
    longDescription:
      "Àṣàfé is a resilient local-first PWA where users can create and view posts offline, with data syncing automatically when online. Built for communities that need reliability in low-connectivity environments.",
    tags: [
      "Vite",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Dexie",
      "IndexedDB",
      "Supabase",
      "Service Worker",
    ],
    image: "/asafe.png",
    features: [
      "Offline-first posting with Dexie.js",
      "Automatic background sync with Supabase",
      "Realtime updates via Supabase subscriptions",
      "User authentication and profiles",
      "Installable PWA with service worker caching",
    ],
    githubUrl: "https://github.com/constantine950/Asafe",
    liveUrl: "https://asafe-seven.vercel.app",
  },
  {
    id: 5,
    title: "Ìtàn",
    description:
      "Explore Nigerian history interactively through stories, events, and timelines.",
    longDescription:
      "Ìtàn is a platform that makes Nigerian history engaging and accessible. Users can explore key events, browse interactive timelines, and discover the stories that shaped the nation. Designed to promote learning through visuals, storytelling, and easy navigation.",
    tags: ["React", "Next.js", "Tailwindcss", "Firebase", "TypeScript"],
    image: "/itan.png",
    features: [
      "Interactive historical timelines",
      "Event and story browsing",
      "Search and filter by era or topic",
      "Responsive and visually engaging design",
    ],
    githubUrl: "https://github.com/constantine950/Itan",
    liveUrl: "https://itan.vercel.app",
  },
  {
    id: 6,
    title: "Rivo - AI Chat Assistant",
    description:
      "Chat. Ask. Resolve. Your intelligent AI assistant for instant answers and seamless support.",
    longDescription:
      "A conversational AI chatbot with natural language processing, real-time interactions, and personalized responses. Designed for intuitive user experiences and 24/7 assistance.",
    tags: [
      "Vite",
      "React",
      "Heroicons",
      "Tailwindcss",
      "React-router",
      "OpenAI API",
    ],
    image: "/rivopic.png",
    features: [
      "Real-time messaging",
      "Context-aware conversations",
      "Multi-language support",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/constantine950/rivo-chatbot",
    liveUrl: "https://rivo-chatbot.vercel.app/",
  },

  {
    id: 7,
    title: "Fast Pizza Co.",
    description:
      "Crave it. Tap it. Get your favorite pizza delivered hot and fresh.",
    longDescription:
      "A pizza ordering application with menu customization, cart functionality, and order tracking. Designed for fast and intuitive ordering experience.",
    tags: ["Vite", "React", "Redux", "Tailwindcss", "React-router"],
    image: "/piz.png",
    features: [
      "Menu customization",
      "Cart functionality",
      "Order tracking",
      "Responsive design",
    ],
    githubUrl: "https://github.com/constantine950/fast-react-pizza",
    liveUrl: "https://fast-react-pizza-umber.vercel.app/",
  },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer Intern",
    company: "NovaTravel Tech Solution",
    duration: "Oct 2024 – Dec 2024",
    responsibilities: [
      "Designed and developed a responsive cabin booking interface for seamless user reservations",
      "Integrated calendar and datepicker features to enhance the booking experience",
      "Focused on performance optimization, achieving faster load times across devices",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "GourmetGrid Technologies",
    duration: "Jan 2025 – Apr 2025",
    responsibilities: [
      "Built an intuitive pizza ordering UI with real-time order tracking",
      "Designed a fast, mobile-first layout for quick ordering on the go",
      "Collaborated with mock APIs to simulate full end-to-end user flow",
    ],
  },
];
