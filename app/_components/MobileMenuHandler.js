"use client";

import { useEffect } from "react";
import { useHeader } from "./HeaderContext";

export default function MobileMenuHandler({ children }) {
  const { isMobileMenuOpen } = useHeader();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return <>{children}</>;
}
