import { MenuItems, SizeConfigure } from "./type";

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
