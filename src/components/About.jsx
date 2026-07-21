import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Years of experience',
    number: 2
  }
];



const About = () => {
  return (
    <section id='about' className='section' > 
    <div className="container">
        <div className="bg-zinc-200/50 p-7 rounded-2xl md:p-12 ">
            <p className="text-zinc-600 font-medium text-justify mb-4 md:mb-8 md:text-3xl md:max-w-[50ch]">
            Hi there! I'm Abdikani,a driven Computer Science 
            student with a knack for turning innovative concepts into
            powerful tech solutions. With a growing interest in Cybersecurity
            and AI, I enjoy tackling complex challenges and building scalable
            systems that create real impact — from full-stack web platforms 
            to embedded systems projects.      
            </p>
            <div className="flex flex-wrap items-center md:items-center gap-4 md:gap-7">
                {
                  aboutItems.map(({label, number}, key) =>(
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-zinc-600 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-600">{label}</p>
                        
                    </div>
                  ))  
                    
                }

                <img src="/image/logo2.png" 
                alt="logo" 
                width={120}
                height={120}
                className="ml-auto md:w-35 md:h-35 bg-amber-600" />
            </div>
        </div>
    </div>

    </section>

)
}

export default About