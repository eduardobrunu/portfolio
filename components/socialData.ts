import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export interface SocialItem {
  key: string;
  label: string;
  href: string;
  icon: any; // lucide-react icon component
  brandClass: string; // tailwind class for icon color
  ringClass: string; // tailwind ring/border classes for hover
}

export const SOCIALS: SocialItem[] = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/eduardobrunu/',
    icon: Github,
    brandClass: 'text-white',
    ringClass: 'hover:ring-[#333] hover:border-[#333]/60',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/eduardobrunocruz/',
    icon: Linkedin,
    brandClass: 'text-[#0A66C2]',
    ringClass: 'hover:ring-[#0A66C2] hover:border-[#0A66C2]/60',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/edubrunu/',
    icon: Instagram,
    brandClass: 'text-[#E1306C]',
    ringClass: 'hover:ring-[#E1306C] hover:border-[#E1306C]/60',
  },
  {
    key: 'email',
    label: 'Email',
    href: 'mailto:eduardobrunoeb@outlook.com',
    icon: Mail,
    brandClass: 'text-purple-400',
    ringClass: 'hover:ring-purple-500 hover:border-purple-500/60',
  },
];

export function getSocials(keys?: string[]): SocialItem[] {
  if (!keys || keys.length === 0) return SOCIALS;
  const set = new Set(keys);
  return SOCIALS.filter(s => set.has(s.key));
}