// // node modules
// import { useRef , useEffect } from 'react';
// import propTypes from 'prop-types';

// const Navbar = ({ navOpen }) => {
//   const lastActiveLink = useRef();
//   const activeBox = useRef();

//   const initActiveBox = () => {
//     activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
//     activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
//     activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
//     activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  
  
//   }

//   useEffect(() => {
//     initActiveBox();
//     window.addEventListener('resize', initActiveBox);
//     return () => window.removeEventListener('resize', initActiveBox);
//   }, []);

//   const activeCurrentLink = (event) =>{
//   lastActiveLink.current?.classList.remove('active');
//   event.target.classList.add('active');
//   lastActiveLink.current = event.target;

//    activeBox.current.style.top = event.target.offsetTop + 'px';
//    activeBox.current.style.left = event.target.offsetLeft + 'px';
//    activeBox.current.style.width = event.target.offsetWidth + 'px';
//    activeBox.current.style.height = event.target.offsetHeight + 'px';

//   }

//   const navItems = [
//     {
//       label: 'About',
//       link: '#about',
//       className: 'nav-link',
//       ref: lastActiveLink
//     },
//     {
//       label: 'Project',
//       link: '#project',
//       className: 'nav-link'
//     },
//     {
//       label: 'Articles',
//       link: '#articles',
//       className: 'nav-link'
//     },
//     {
//       label: 'Contact',
//       link: '#contact',
//       className: 'nav-link md:hidden'
//     }
//   ];

//   return (
//     <nav className={`navbar ${navOpen ? 'active' : ''}`}>
//       {navItems.map(({ label, link, className, ref }, key) => (
//         <a href={link} key={key} ref={ref} className={className} onClick={activeCurrentLink}>
//           {label}
//         </a>
//       ))}
//       <div className="active-box" ref={activeBox}></div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   navOpen: propTypes.bool.isRequired
// };

// export default Navbar;







// import { useEffect, useState } from 'react';

// // Icons via icons8 (https://img.icons8.com) — swap the style/name to match your taste.
// // Format: https://img.icons8.com/{style}/{size}/{icon-name}.png
// const icons = {
//   shield: 'https://img.icons8.com/fluency/48/cyber-security.png',
//   ai: 'https://img.icons8.com/fluency/48/artificial-intelligence.png',
//   code: 'https://img.icons8.com/fluency/48/source-code.png',
// };

// const statLines = [
//   { cmd: 'projects --count', value: '05', label: 'projects shipped' },
//   { cmd: 'uptime --years', value: '02', label: 'years building' },
// ];

// const focusTags = [
//   { icon: icons.shield, label: 'cybersecurity' },
//   { icon: icons.ai, label: 'ai / ml' },
//   { icon: icons.code, label: 'full-stack systems' },
// ];

// const About = () => {
//   const [typed, setTyped] = useState('');
//   const fullText = "Hi there! I'm Abdikani, a driven Computer Science student with a knack for turning innovative concepts into powerful tech solutions. With a growing interest in Cybersecurity and AI, I enjoy tackling complex challenges and building scalable systems that create real impact — from full-stack web platforms to embedded systems projects.";

//   useEffect(() => {
//     let i = 0;
//     const id = setInterval(() => {
//       i += 1;
//       setTyped(fullText.slice(0, i));
//       if (i >= fullText.length) clearInterval(id);
//     }, 18);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <section id="about" className="section py-16 md:py-24">
//       <style>{`
//         @keyframes scanline {
//           0%   { transform: translateY(-100%); opacity: 0; }
//           10%  { opacity: .5; }
//           90%  { opacity: .5; }
//           100% { transform: translateY(2200%); opacity: 0; }
//         }
//         @keyframes blink {
//           0%, 49% { opacity: 1; }
//           50%, 100% { opacity: 0; }
//         }
//         .scanline { animation: scanline 5s linear infinite; }
//         .cursor-blink { animation: blink 1s step-start infinite; }
//       `}</style>

//       <div className="container max-w-3xl mx-auto px-4">
//         <div className="relative overflow-hidden rounded-xl border border-[#1E2A44] bg-[#101A2E] shadow-2xl">
//           {/* scanning accent line */}
//           <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#35D4C7]/60 scanline" />

//           {/* terminal chrome */}
//           <div className="flex items-center gap-2 border-b border-[#1E2A44] bg-[#0D1626] px-4 py-3">
//             <span className="h-3 w-3 rounded-full bg-[#3a4a68]" />
//             <span className="h-3 w-3 rounded-full bg-[#3a4a68]" />
//             <span className="h-3 w-3 rounded-full bg-[#3a4a68]" />
//             <span className="ml-3 font-mono text-xs text-[#8B98B3]">bdikani.sh</span>
//           </div>

//           <div className="p-6 md:p-10">
//             {/* whoami block */}
//             <p className="font-mono text-xs md:text-sm text-[#35D4C7] mb-2">$ whoami</p>
//             <h2 className="font-mono text-xl md:text-3xl font-semibold text-[#E8EDF5] mb-6">
//               Abdikani <span className="text-[#8B98B3]">— CS Student</span>
//             </h2>

//             <p className="font-mono text-xs md:text-sm text-[#35D4C7] mb-2">$ cat kani.txt</p>
//             <p className="font-sans text-[#C4CDE0] leading-relaxed mb-8 md:text-lg md:max-w-[62ch]">
//               {typed}
//               <span className="cursor-blink text-[#35D4C7]">▍</span>
//             </p>

//             {/* stats as key:value readout */}
//             <p className="font-mono text-xs md:text-sm text-[#35D4C7] mb-3">$ stats --summary</p>
//             <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
//               {statLines.map(({ cmd, value, label }) => (
//                 <div key={cmd} className="font-mono">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-2xl md:text-4xl font-bold text-[#F2B84B]">{value}</span>
//                   </div>
//                   <p className="text-xs md:text-sm text-[#8B98B3] mt-1">{label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* focus areas as CLI-style flags */}
//             <p className="font-mono text-xs md:text-sm text-[#35D4C7] mb-3">$ focus --areas</p>
//             <div className="flex flex-wrap gap-3">
//               {focusTags.map(({ icon, label }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-2 rounded-lg border border-[#1E2A44] bg-[#0D1626] px-3 py-2"
//                 >
//                   <img src={icon} alt="" width={20} height={20} />
//                   <span className="font-mono text-xs md:text-sm text-[#C4CDE0]">--{label.replace(/\s/g, '-')}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
