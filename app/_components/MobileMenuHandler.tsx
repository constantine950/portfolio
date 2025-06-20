"use client";

import React, { useEffect } from "react";
import { useHeader } from "../context/HeaderProvider";

export default function MobileMenuHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileMenuOpen } = useHeader();

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMobileMenuOpen]);

  return <>{children}</>;
}
