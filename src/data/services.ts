export interface AiService {
  id: string;
  name: string;
  description: string;
  category: "Chatbot" | "Image Generation" | "Video Generation" | "IDE AI" | "Terminal AI";
  url: string;
  pricing: "Free" | "Freemium" | "Paid";
  logo: string;
}

export const aiServices: AiService[] = [
  {
    id: "1",
    name: "Windsurf",
    description: "AI-powered code completion and code generation for your IDE.",
    category: "IDE AI",
    url: "https://windsurf.dev",
    pricing: "Freemium",
    logo: "/logos/windsurf.svg",
  },
  {
    id: "2",
    name: "OpenAI",
    description: "A powerful AI chatbot that can answer your questions and help you with your tasks.",
    category: "Chatbot",
    url: "https://openai.com/",
    pricing: "Freemium",
    logo: "/logos/openai.svg",
  },
  {
    id: "3",
    name: "Midjourney",
    description: "Generate high-quality images from text prompts.",
    category: "Image Generation",
    url: "https://www.midjourney.com/",
    pricing: "Paid",
    logo: "/logos/midjourney.svg",
  },
  {
    id: "4",
    name: "Runway",
    description: "Generate videos from text prompts or by using existing images.",
    category: "Video Generation",
    url: "https://runwayml.com/",
    pricing: "Freemium",
    logo: "/logos/runway.svg",
  },
  {
    id: "5",
    name: "Warp",
    description: "A modern, Rust-based terminal with AI features built-in.",
    category: "Terminal AI",
    url: "https://www.warp.dev/",
    pricing: "Free",
    logo: "/logos/warp.svg",
  },
];
