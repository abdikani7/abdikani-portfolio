
// components
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40">
        <div className='max-w-screen-2xl w-full mx-auto px-0 flex justify-between items-center'>
            <h1>
                <a href="/" className='logo-name'>
                    <img src="/public/image/logo-name.png" width={190} height={40} alt="Abdikani" />
                </a>
            </h1>
            <div className="">
                <button className="menu-btn md:hidden w-9 h-9 grid place-items-center bg-zinc-50 rounded-xl ring-inset ring-1 ring-slate-300 backdrop-blur-2xl hover:bg-zinc-200 transition-[transform,shadow,background-color] active:scale-95" onClick={null}>
            <img width="35" height="30"
             src="https://img.icons8.com/windows/96/menu--v5.png"alt="menu"/>
            </button>
            <Navbar />

            </div>
            <a href="/" className='px-6 btn btn-secondary max-md:hidden md:justify-self-end'>
            <img width="35" height="30" src="https://img.icons8.com/ios-glyphs/240/github.png" alt="github"/>
            </a>
        </div>
    </header>
  )
}

export default Header