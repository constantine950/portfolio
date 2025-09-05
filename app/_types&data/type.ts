export type MenuItems = {
  title: string;
  link: string;
};

export type ScreenSize = "sm" | "md" | "lg" | "xl";

export interface MenuItemProps {
  item: MenuItems;
  index: number;
  toggleMobileMenu?: () => void;
  screenSize: ScreenSize;
}

type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export interface ProjectProps {
  project: ProjectType;
  size?: ScreenSize;
}

type SizeVal = {
  imageRatio: string;
  padding: string;
  titleSize: string;
  descriptionLines: string;
  tagSize: string;
  iconSize: string;
};

export type SizeConfigure = Record<ScreenSize, SizeVal>;

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

export interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setIsSuccess: (value: boolean) => void;
}

export type HeaderContextValue = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type ProjectTypes = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
};

export type Skill = string;

export type CTAButtonProps = {
  href: string;
  download?: string;
  icon: React.ReactNode;
  text: string;
  variant: "primary" | "secondary";
};

export type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export type ExperienceItemProps = {
  experience: Experience;
  isLast: boolean;
  index: number;
};

// Type definitions
export type Skills = {
  name: string;
  level: number;
  icon: React.ReactElement<{ className?: string }>;
  color: string;
};

export type SkillsCategory = {
  [key: string]: Skills[];
};

export type SkillsCategorySectionProps = {
  category: string;
  items: Skills[];
  categoryIndex: number;
};

export type CategoryIconProps = {
  category: string;
};

export type SkillCardProps = {
  skill: Skills;
  index: number;
};

export type SkillHeaderProps = {
  skill: Skills;
};

export type ProgressBarProps = {
  skill: Skills;
  index: number;
};
