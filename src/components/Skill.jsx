
// components
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/icons/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/icons/Python.svg',
    label: 'Python',
    desc: 'Programming',
  },
  {
    imgSrc: '/icons/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/icons/nodejs.png',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/icons/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
   {
    imgSrc: '/icons/TypeScript.svg',
    label: 'TypeScript',
    desc: 'Programming',
  },
  {
    imgSrc: '/icons/React.png',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/icons/Tailwind CSS.svg',
    label: 'Tailwind CSS',
    desc: 'CSS Framework',
  },
  {
    imgSrc: '/icons/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/icons/SQL Server.svg',
    label: 'SQL Server',
    desc: 'Database',
  },
  {
    imgSrc: '/icons/C++.svg',
    label: 'C++',
    desc: 'Programming',
  },
  {
    imgSrc: '/icons/PHP.png',
    label: 'PHP',
    desc: 'Scripting',
  },
  {
    imgSrc: '/icons/Visual Studio.svg',
    label: 'Visual Studio',
    desc: 'IDE for coding',
  },
  {
    imgSrc: '/icons/Chrome.svg',
    label: 'Chrome',
    desc: 'inspecting web apps',
  },
];
const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I use
            </h2>

            <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {skillItem.map(({imgSrc,label,desc}, key) =>
                ( 
                  <SkillCard
                   key={key}
                   imgsrc={imgSrc}
                   label={label}
                   desc={desc}
                  />

                ))}
            </div>
        </div>
    </section>

)
}

export default Skill