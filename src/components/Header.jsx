
// node modules
import { useState } from 'react';

// components
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-2 left-0 w-full h-20 flex items-center z-40">
      <div className="w-full flex justify-between items-center pl-0   pr-11">
                <h1 className="flex items-center">
          <a href="/" className="logo-name flex items-center">
            <img
            src="/image/logo-name4.png"              
              width={211}
              height={46}
              alt="Abdikani"
              className="block"
            />
          </a>
        </h1>

        <div className="relative flex items-center gap-1 sidebar">
          <button
            className=" menu-btn md:hidden w-12 h-12 grid place-items-center rounded-xl bg-white ring-1 ring-zinc-300 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <img
              width="28"
              height="30"
              src="https://img.icons8.com/windows/96/menu--v5.png"
              alt="menu"
              className="block"
            />
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a href="https://github.com/abdikani7"
        className="hidden md:flex">
        <img
           src="https://img.icons8.com/ios-glyphs/240/github.png"
          width="35"
          height="30"
          alt="github"/>
        </a>
      </div>
    </header>
  );
};

export default Header;