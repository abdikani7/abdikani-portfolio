// components
import { ButtonOutline, ButtonPrimary } from "./Button";

const stack = [
  { name: "React", icon: "https://img.icons8.com/color/24/react-native.png" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/24/typescript.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/color/24/tailwindcss.png" },
];

const Hero = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-6 lg:pt-10 overflow-hidden">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .float-slow { animation: float-slow 6s ease-in-out infinite; }
      `}</style>

      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 w-72 h-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="container relative lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          {/* eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium tracking-wide text-sky-700">
              Frontend Developer
            </span>
            <div className="flex items-center gap-1.5 text-zinc-600 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </span>
              Available for work
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <figure className="img-box w-9 h-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
              <img
                src="/image/favicon.png"
                width={40}
                height={40}
                alt="abdikani"
                className="img-cover"
              />
            </figure>
          </div>

          <h2 className="headline-l max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mb-6">
            Hi!{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-3 bg-sky-200/70 -rotate-1" />
              <span className="relative">I'm Abdikani,</span>
            </span>{" "}
            Building Fast, Modern &amp; Responsive Websites Focused on clean
            design, performance, and great user experiences.
          </h2>

          {/* tech stack chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8 lg:mb-10">
            {stack.map(({ name, icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm"
              >
                <img src={icon} alt="" width={14} height={14} />
                {name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ButtonPrimary href="/cv/Abdikani-CV.pdf" label="Download CV" icon="download" />
            <ButtonOutline href="#about" icon="arrow_downward" onClick={scrollToAbout} />
          </div>
        </div>

        <div className="hidden lg:block relative">
          {/* decorative ring behind image */}
          <div className="absolute -inset-4 rounded-2xl border border-dashed border-sky-200" />

          <figure className="float-slow w-full max-w-md mx-auto lg:mx-0 lg:ml-auto relative">
            <img
              src="/image/img-banner.png"
              width={656}
              height={800}
              alt="img-banner"
              className="w-full h-auto rounded-xl shadow-xl/30"
            />

            {/* floating stat card */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3 shadow-lg">
              <span className="text-2xl font-bold text-sky-600">2+</span>
              <span className="text-xs text-zinc-500 leading-tight max-w-[10ch]">
                Years building software
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
