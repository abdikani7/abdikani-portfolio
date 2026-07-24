// ProjectCard.jsx
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  date,
  tag,
  title,
  description,
  icons = [],
  projectLink,
  classes = "",
}) => {
  return (
    <div
      className={
        "group relative flex flex-col rounded-2xl bg-white ring-1 ring-inset ring-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-100 hover:ring-teal-200 " +
        classes
      }
    >
      {/* Cover image (optional) */}
      {imgSrc && (
        <figure className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
      )}

      {/* Top row: date + tag badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{date}</span>
        {tag && (
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {tag}
          </span>
        )}
      </div>

      {/* Title + description */}
      <h3 className="mb-2 text-lg font-bold text-slate-800 transition-colors group-hover:text-teal-700">
        {title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Bottom row: tech icons + arrow button */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {icons.map((icon, key) => (
            <span
              key={key}
              className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50 ring-1 ring-inset ring-slate-200"
              title={icon.label}
            >
              <img
                src={icon.src}
                alt={icon.label}
                className="h-4 w-4"
              />
            </span>
          ))}
        </div>

        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-600 transition-colors group-hover:bg-teal-700">
          <img
            src="https://img.icons8.com/ios-filled/18/ffffff/up-right.png"
            alt="visit project"
            className="h-4 w-4"
          />
        </div>
      </div>

      {/* Full-card clickable overlay */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-2xl"
        aria-label={`Visit ${title}`}
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  date: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
