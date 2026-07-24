// ArticleCard.jsx
// Reusable card for displaying a single article/blog post preview.
// Style: white background, teal/slate accents (matches Header/Hero/About sections).
// Icons: icons8.com CDN (same source used across the portfolio).

export default function ArticleCard({ article }) {
  const {
    title,
    excerpt,
    image,
    category,
    date,
    readTime,  
    tags = [],
    slug,
  } = article;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-100">
      {/* Cover image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-teal-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Meta row: date + read time */}
        <div className="mb-2 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <img
              src="https://img.icons8.com/ios-filled/16/64748b/calendar--v1.png"
              alt="date"
              className="h-3.5 w-3.5 opacity-70"
            />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <img
              src="https://img.icons8.com/ios-filled/16/64748b/clock--v1.png"
              alt="read time"
              className="h-3.5 w-3.5 opacity-70"
            />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-slate-800 transition-colors group-hover:text-teal-700">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more link */}
        <a
          href={`/articles/${slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-800"
        >
          Read article
          <img
            src="https://img.icons8.com/ios-filled/14/0d9488/forward-arrow.png"
            alt="arrow"
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}
