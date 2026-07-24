import { useEffect, useState } from 'react';

// Icons via icons8 (https://img.icons8.com) — swap the style/name to match your taste.
// Format: https://img.icons8.com/{style}/{size}/{icon-name}.png
const icons = {
  shield: 'https://img.icons8.com/fluency/48/cyber-security.png',
  ai: 'https://img.icons8.com/fluency/48/artificial-intelligence.png',
  code: 'https://img.icons8.com/fluency/48/source-code.png',
};

const statLines = [
  { value: '05', label: 'projects shipped' },
  { value: '02', label: 'years building' },
];

const focusTags = [
  { icon: icons.shield, label: 'cybersecurity' },
  { icon: icons.ai, label: 'ai / ml' },
  { icon: icons.code, label: 'full-stack systems' },
];

const About = () => {
  const [typed, setTyped] = useState('');
  const fullText = "Hi there! I'm Abdikani, a driven Computer Science student with a knack for turning innovative concepts into powerful tech solutions. With a growing interest in Cybersecurity and AI, I enjoy tackling complex challenges and building scalable systems that create real impact — from full-stack web platforms to embedded systems projects.";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section py-16 md:py-24">
      <style>{`
        @keyframes scanline {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: .6; }
          90%  { opacity: .6; }
          100% { transform: translateY(2200%); opacity: 0; }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .scanline { animation: scanline 5s linear infinite; }
        .cursor-blink { animation: blink 1s step-start infinite; }
      `}</style>

      <div className="container max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          {/* scanning accent line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-teal-500/60 scanline" />

          {/* terminal chrome */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="ml-3 font-mono text-xs text-slate-400">Abdikani.sh</span>
          </div>

          <div className="grid md:grid-cols-[1.4fr_1fr]">
            {/* LEFT: intro */}
            <div className="p-6 md:p-10">
              <p className="font-mono text-xs md:text-sm text-teal-600 mb-2">$ whoami</p>
              <h2 className="font-mono text-xl md:text-3xl font-semibold text-slate-800 mb-6">
                Abdikani <span className="text-slate-400">— CS Student</span>
              </h2>

              <p className="font-mono text-xs md:text-sm text-teal-600 mb-2">$ cat kani.txt</p>
              <p className="font-sans text-slate-600 leading-relaxed md:text-lg md:max-w-[56ch]">
                {typed}
                <span className="cursor-blink text-teal-600">▍</span>
              </p>
            </div>

            {/* RIGHT: stats + focus areas */}
            <div className="border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50/60 p-6 md:p-10">
              <p className="font-mono text-xs text-teal-600 mb-3">$ stats --summary</p>
              <div className="flex flex-wrap gap-6 mb-8">
                {statLines.map(({ value, label }) => (
                  <div key={label} className="font-mono">
                    <span className="text-2xl md:text-4xl font-bold text-amber-600">{value}</span>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-xs text-teal-600 mb-3">$ focus --areas</p>
              <div className="flex flex-col gap-2">
                {focusTags.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2"
                  >
                    <img src={icon} alt="" width={18} height={18} />
                    <span className="font-mono text-xs md:text-sm text-slate-600">
                      --{label.replace(/\s/g, '-')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
