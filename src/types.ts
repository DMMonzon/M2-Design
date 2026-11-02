export type Language = 'ES' | 'EN';

export interface SubWork {
  id: string;
  image?: string;
  video?: string;
  title: { ES: string; EN: string };
  likes: number;
  commentsCount: number;
  shares: number;
  description: { ES: string; EN: string };
}

export interface Project {
  id: string;
  area: 'apps' | 'web' | 'uxui' | 'graphic' | 'textil' | 'branding' | 'media';
  areaLabel: { ES: string; EN: string };
  title: { ES: string; EN: string };
  description: { ES: string; EN: string };
  testimonial: {
    name: string;
    role: { ES: string; EN: string };
    text: { ES: string; EN: string };
    avatar: string;
  };
  image: string;
  likes: number;
  commentsCount: number;
  shares: number;
  examples: SubWork[];
}

export interface SkillItem {
  name: { ES: string; EN: string };
  iconName: string;
}

export interface TechnologyItem {
  name: string;
  iconName: string;
}
