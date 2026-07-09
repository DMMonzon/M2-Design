export type Language = 'ES' | 'EN';

export interface Project {
  id: string;
  area: 'apps' | 'web' | 'graphic' | 'textil' | 'branding' | 'media';
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
}

export interface SkillItem {
  name: { ES: string; EN: string };
  iconName: string;
}

export interface TechnologyItem {
  name: string;
  iconName: string;
}
