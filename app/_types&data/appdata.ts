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
    title: "Fast Pizza Co.",
    description:
      "Crave it. Tap it. Get your favorite pizza delivered hot and fresh.",
    tags: ["Vite", "React", "Redux", "Tailwindcss", "React-router"],
    image: "/piz.png",
  },
  {
    id: 2,
    title: "Kiva ChatApp",
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
    title: "Rivo - AI Chat Assistant",
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
    id: 4,
    title: "Sailor",
    description: "Built for fun and learning purposes",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/sai.png",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "Find what to watch next — movies, trailers, and more at your fingertips.",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/mov.png",
  },
  {
    id: 6,
    title: "Church Website",
    description:
      "A modern, responsive website designed for a church to share events, sermons, and connect with the community online.",
    tags: ["HTML", "Tailwindcss", "Owl-carousel", "BootsrapIcons"],
    image: "/chu.png",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
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
  {
    id: 2,
    title: "Kiva ChatApp",
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
    id: 4,
    title: "Sailor",
    description: "Built for fun and learning purposes",
    longDescription:
      "An experimental web project exploring creative CSS animations and interactive elements. Serves as a playground for frontend development techniques.",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/sai.png",
    features: [
      "Interactive animations",
      "Experimental layouts",
      "Custom carousel implementations",
      "Mobile-first approach",
    ],
    githubUrl: "https://github.com/constantine950/sailor",
    liveUrl: "https://sailor-delta.vercel.app",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "Find what to watch next — movies, trailers, and more at your fingertips.",
    longDescription:
      "A movie discovery platform showcasing trending films with trailers, ratings, and recommendations. Features intuitive browsing with Owl Carousel integration.",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/mov.png",
    features: [
      "Trending movies showcase",
      "Trailer integration",
      "Responsive carousel",
      "Minimalist UI design",
    ],
    githubUrl: "https://github.com/constantine950/movie-app",
    liveUrl: "https://movie-app-six-tau-54.vercel.app",
  },
  {
    id: 6,
    title: "Church Website",
    description:
      "A modern, responsive website designed for a church to share events, sermons, and connect with the community online.",
    longDescription:
      "This project is a fully responsive church website built to enhance the church's online presence. It features sections for upcoming events, sermon archives, service times. The website is designed with a clean and welcoming layout to reflect the church’s mission and invite both members and visitors to engage. it prioritizes ease of navigation, accessibility, and mobile-friendliness.",
    tags: ["HTML", "Tailwindcss", "Owl-carousel", "BootsrapIcons"],
    image: "/chu.png",
    features: [
      "Sleek design",
      "Experimental layouts",
      "New tailwind classes",
      "Responsive design",
    ],
    githubUrl: "https://github.com/constantine950/church-repo",
    liveUrl: "https://church-website-pied.vercel.app",
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

export const skills: Skill[] = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "NextAuth",
  "Clerk",
  "Prisma",
  "React-router",
  "React Query",
  "Redux",
  "Firebase",
];
