export type ProjectCategory = "all" | "fullstack" | "creative" | "ai" | "uiux";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "fullstack" | "creative" | "ai" | "uiux";
  categoryLabel: string;
  thumbnail: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  features: string[];
  featured: boolean;
  bentoSpan?: "col-span-1" | "col-span-2" | "col-span-3" | "row-span-2";
  year?: string;
}

export type SkillCategory = "all" | "frontend" | "backend" | "design" | "tools";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
  iconName: string;
  level: string;
  levelPercentage: number;
  featured: boolean;
  color: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  badgeColor?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  badge: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  iconName: string;
  accent: string;
}

export type ThemeAccentKey = "violet" | "emerald" | "cyan" | "amber" | "rose";

export interface ThemeAccentConfig {
  key: ThemeAccentKey;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  glowClass: string;
  borderClass: string;
  textAccentClass: string;
  bgAccentClass: string;
}
