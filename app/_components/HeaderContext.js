"use client";

import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) throw new Error("Using context out of provider");
  return context;
};

export default HeaderProvider;
