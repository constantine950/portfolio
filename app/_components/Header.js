import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header
      className={`px-6 py-2.5 flex items-center justify-between shadow-md fixed top-0 w-full z-50 bg-gray-50`}
    >
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
