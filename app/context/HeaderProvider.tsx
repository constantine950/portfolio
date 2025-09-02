"use client";

import React, { createContext, useContext, useState } from "react";
import { HeaderContextValue } from "../_types&data/type";

const HeaderContext = createContext<HeaderContextValue | undefined>(undefined);

export default function HeaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const value: HeaderContextValue = {
    isMobileMenuOpen,
    toggleMobileMenu: () => setIsMobileMenuOpen((prev) => !prev),
  };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export const useHeader = (): HeaderContextValue => {
  const context = useContext(HeaderContext);
  if (context === undefined)
    throw new Error("useHeader must be used within HeaderProvider");
  return context;
};
