"use client";

import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useHeader } from "./HeaderContext";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/portfolio" },
  { title: "Resume", link: "/resume" },
  { title: "Skills", link: "/skills" },
  { title: "Contact", link: "/contact" },
];

function Navigation() {
  const { isMobileMenuOpen, toggleMobileMenu } = useHeader();

  return (
    <>
      {/* Mobile Menu Button - Shows on sm only */}
      <button
        onClick={toggleMobileMenu}
        className="sm:block md:hidden" // Only show on small screens
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-7 w-7 text-gray-900 cursor-pointer" />
        ) : (
          <Bars4Icon className="text-gray-900 h-7 w-7 hover:text-gray-400 cursor-pointer" />
        )}
      </button>

      {/* Mobile Menu - Shows on sm only */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-12 right-0 w-full h-96 bg-gray-100 shadow-lg z-50 sm:block md:hidden"
          >
            <nav className="p-4">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <MenuItem
                    key={item.title}
                    item={item}
                    index={index}
                    toggleMobileMenu={toggleMobileMenu}
                    screenSize="sm"
                  />
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Medium Screens (md) - Compact Navigation */}
      <nav className="hidden sm:hidden md:block lg:hidden">
        <ul className="flex items-center space-x-4">
          {items.map((item, index) => (
            <MenuItem
              key={item.title}
              item={item}
              index={index}
              screenSize="md"
            />
          ))}
        </ul>
      </nav>

      {/* Large Screens (lg) - Full Navigation with Icons */}
      <nav className="hidden sm:hidden md:hidden lg:block xl:hidden">
        <ul className="flex items-center space-x-6">
          {items.map((item, index) => (
            <MenuItem
              key={item.title}
              item={item}
              index={index}
              screenSize="lg"
            />
          ))}
        </ul>
      </nav>

      {/* Extra Large Screens (xl) - Enhanced Navigation */}
      <nav className="hidden sm:hidden md:hidden lg:hidden xl:block">
        <ul className="flex items-center space-x-8">
          {items.map((item, index) => (
            <MenuItem
              key={item.title}
              item={item}
              index={index}
              screenSize="xl"
            />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
