export type Language = 'bn' | 'en';

export type ProjectCategory = 'all' | 'video' | 'design';

export interface VideoProject {
  id: string;
  title: string;
  titleBn: string;
  category: 'commercial' | 'reels' | 'motion' | 'youtube';
  categoryLabel: string;
  categoryLabelBn: string;
  vimeoId?: string;
  vimeoEmbedUrl?: string;
  youtubeId?: string;
  youtubeEmbedUrl?: string;
  videoSrc?: string;
  isDirectVideo?: boolean;
  thumbnail: string;
  duration: string;
  client: string;
  views?: string;
  aspectRatio: '16:9' | '9:16';
  description: string;
  descriptionBn: string;
  toolsUsed: string[];
  keyFeatures: string[];
  keyFeaturesBn: string[];
}

export interface DesignProject {
  id: string;
  title: string;
  titleBn: string;
  category: 'poster' | 'ad-creative' | 'thumbnail' | 'branding';
  categoryLabel: string;
  categoryLabelBn: string;
  image: string;
  client: string;
  dimensions: string;
  description: string;
  descriptionBn: string;
  toolsUsed: string[];
  keyFeatures: string[];
  keyFeaturesBn: string[];
}

export interface SkillItem {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  iconName: string;
  tools?: string[];
}

export interface AcademicEducation {
  degree: string;
  degreeBn: string;
  year: string;
  yearBn: string;
  status: string;
  statusBn: string;
  desc: string;
  descBn: string;
  iconType: string;
}

export interface ProfessionalCourse {
  institution: string;
  institutionBn: string;
  courseName: string;
  batch: string;
  topics: {
    name: string;
    nameBn: string;
    tools: string;
  }[];
}

export interface ContactCard {
  id: string;
  name: string;
  nameBn: string;
  handle: string;
  desc: string;
  descBn: string;
  iconName: string;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  bgGlow: string;
  actionText: string;
  actionTextBn: string;
  actionUrl: string;
  hasCopy?: boolean;
}
