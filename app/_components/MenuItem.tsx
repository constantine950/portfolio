"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type MenuItem = {
  title: string;
  link: string;
};

type MenuItemProps = {
  item: MenuItem;
  index: number;
  toggleMobileMenu?: () => void;
  screenSize: "sm" | "md" | "lg" | "xl";
};

function MenuItem({
  item,
  index,
  toggleMobileMenu,
  screenSize,
}: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.link;

  return (
    <motion.li
      initial={{ opacity: 0, y: screenSize === "sm" ? -20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        relative
        ${screenSize === "sm" ? "text-lg" : ""}
        ${screenSize === "md" ? "px-2 py-1" : ""}
        ${screenSize === "lg" ? "px-3 py-2" : ""}
        ${screenSize === "xl" ? "px-4 py-2" : ""}
      `}
    >
      <Link
        href={item.link}
        onClick={screenSize === "sm" ? toggleMobileMenu : undefined}
        className={`
          flex items-center
          ${isActive ? "text-indigo-600 font-medium" : "text-gray-700 hover:text-indigo-500"}
          transition-colors duration-200
          ${screenSize === "lg" || screenSize === "xl" ? "space-x-2" : ""}
        `}
      >
        <span>{item.title}</span>
      </Link>
    </motion.li>
  );
}

export default MenuItem;
