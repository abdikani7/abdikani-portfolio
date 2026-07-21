// components
import { ButtonOutline } from "./Button";
const Hero = () => {
  return (
<section id="about" className="pt-6 lg:pt-10">        
    <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-l-lg">
                        <img src="/image/favicon.png"
                        width={40}
                        height={40}
                         alt="abdikani"
                         className="img-cover"
                          />
                    </figure>
                    <div className="flex items-center gap-1.5
                     text-zinc-600  text-sm tracking-wide ">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0  rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>
                
                <h2 className="headline-l max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 ">
                Hi! <a class="underline decoration-sky-500">I'm Abdikani,
                </a> Building Fast, Modern & Responsive Websites Focused on clean 
                design, performance, and great user experiences.

                </h2>
                
                <div className="flex items-center gap-3 size-6 animate-bounce">
                {/* <ButtonPrimary 
                label="Download CV"
                icon="download" /> */}

                <ButtonOutline 
                href="#about"
                icon="arrow_downward" />
                
                </div>
             </div>

            <div className=" hidden lg:block ">
                <figure className=" w-100 h-100 rounded-l-lg">
                    <img src="/image/img-banner.png" 
                    width={656}
                    height={800}
                    alt="img-banner" className="rounded-xl shadow-xl/30  ml-25" />
                    
                </figure>
            </div>
        </div>

    </section>

)
}

export default Hero