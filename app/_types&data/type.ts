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

type SizeKey = ScreenSize;

export interface ProjectProps {
  project: ProjectType;
  size?: SizeKey;
}

type SizeVal = {
  imageRatio: string;
  padding: string;
  titleSize: string;
  descriptionLines: string;
  tagSize: string;
  iconSize: string;
};

export type SizeConfigure = Record<SizeKey, SizeVal>;

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
