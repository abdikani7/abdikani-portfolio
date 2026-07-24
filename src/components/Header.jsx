import { useState, useEffect } from "react";

// Icons8 icons (free CDN, no API key needed)
const ICON_GITHUB = "https://img.icons8.com/?size=100&id=62856&format=png&color=000000";
const ICON_MENU = "https://img.icons8.com/ios-filled/50/000000/menu--v1.png";
const ICON_CLOSE = "https://img.icons8.com/ios-filled/50/000000/multiply.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Header-ka waa inuu isbedelo marka user-ku scroll-gareeyo
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xir menu-ga mobile-ka marka link la taabto
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky font-sans top-0 left-0 w-full z-50 transition-all duration-300 ${
  isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Name */}
          <a href="#about" className="flex items-center shrink-0" onClick={closeMenu}>
          <img
          src="/public/image/favicon.png"
          alt="Kani Logo"
          className="rounded-full w-9 h-9 sm:w-11 sm:h-12 border-dotted border-2 border-black object-cover"
  />
</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-15">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right side: GitHub icon + mobile toggle */}
          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="https://github.com/abdikani7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
            >
              <img src={ICON_GITHUB} alt="GitHub" className="w-8 h-8" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <img
                src={isOpen ? ICON_CLOSE : ICON_MENU}
                alt="Menu"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-slate-100 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center text-center px-4 py-6 gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-semibold text-slate-800 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
