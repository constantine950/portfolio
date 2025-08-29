"use client";

import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useHeader } from "../context/HeaderProvider";
import { items } from "../_types&data/appdata";
import { ScreenSize } from "../_types&data/type";

function Navigation(): React.ReactElement {
  const { isMobileMenuOpen, toggleMobileMenu } = useHeader();

  const renderMenuItems = (screenSize: ScreenSize, className: string) => (
    <nav className={className}>
      <ul
        className={
          screenSize === "sm" ? "space-y-4" : "flex items-center space-x-4"
        }
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.title}
            item={item}
            index={index}
            toggleMobileMenu={
              screenSize === "sm" ? toggleMobileMenu : undefined
            }
            screenSize={screenSize}
          />
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="sm:block md:hidden"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-7 w-7 text-gray-900 cursor-pointer" />
        ) : (
          <Bars4Icon className="text-gray-900 h-7 w-7 hover:text-gray-400 cursor-pointer" />
        )}
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-12 right-0 w-full h-96 bg-gray-100 shadow-lg z-50 sm:block md:hidden"
          >
            {renderMenuItems("sm", "p-4")}
          </motion.div>
        )}
      </AnimatePresence>

      {renderMenuItems("md", "hidden sm:hidden md:block lg:hidden")}

      {renderMenuItems("lg", "hidden sm:hidden md:hidden lg:block xl:hidden")}

      {renderMenuItems("xl", "hidden sm:hidden md:hidden lg:hidden xl:block")}
    </>
  );
}

export default Navigation;
