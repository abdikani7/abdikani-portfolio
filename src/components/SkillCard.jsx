

// node modulos
import PropTypes from "prop-types"


const SkillCard = ({
    imgsrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3  border-slate-200 bg-white shadow-xl right-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-100 transition-colors group' +  classes}>
        <figure className="bg-zinc-100 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
            <img src={imgsrc}
            width={32} 
            height={32}
            alt={label}/>
        </figure>
        <div>
            <h3>
                {label}
            </h3>
            <p className=" text-zinc-400 text-sim">
                {desc}
            </p>
        </div>


    </div>
  )
}

SkillCard.PropTypes ={
    imgsrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,    
    classes: PropTypes.string.isRequired,



}

export default SkillCard