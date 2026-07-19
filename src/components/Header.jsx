
// node modules
import { useState } from 'react';

// components
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-2 left-0 w-full h-20 flex items-center z-40">
<div className="w-full flex justify-between items-center pl-0  pr-8">
                <h1 className="flex items-center">
          <a href="/" className="logo-name flex items-center">
            <img
            src="/image/logo-name2.png"              
              width={211}
              height={46}
              alt="Abdikani"
              className="block"
            />
          </a>
        </h1>

        <div className="relative flex items-center gap-1 sidebar">
          <button
            className="menu-btn md:hidden w-8 h-8 grid place-items-center bg-zinc-50 rounded-xl
             ring-inset ring-1 ring-slate-50 backdrop-blur-2xl hover:bg-zinc-200 transition-
             [transform,box-shadow,background-color] active:scale-95"
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

        <a
          href="https://github.com/abdikani7"
         className="px-8 btn btn-secondary hidden md:hidden items-center justify-center rounded-xl transition-[transform,box-shadow,background-color] active:scale-95">
           <img
           width="35"
           height="30"
           src="https://img.icons8.com/ios-glyphs/240/github.png"
          alt="github"
          className="block" />
          </a>
      </div>
    </header>
  );
};

export default Header;