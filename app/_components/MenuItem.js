"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

function MenuItem({ item, index, toggleMobileMenu, screenSize }) {
  const pathname = usePathname();

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
        href={`${item.link}`}
        onClick={screenSize === "sm" ? toggleMobileMenu : null}
        className={`
          flex items-center
          ${pathname === item.link ? "text-indigo-600 font-medium" : "text-gray-700 hover:text-indigo-500"}
          transition-colors duration-200
          ${screenSize === "lg" || screenSize === "xl" ? "space-x-2" : ""}
        `}
      >
        {item.icon && (screenSize === "lg" || screenSize === "xl") && (
          <item.icon className="h-5 w-5" />
        )}
        <span>{item.title}</span>
      </Link>
    </motion.li>
  );
}

export default MenuItem;
