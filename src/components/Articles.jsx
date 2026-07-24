import articlesData from "../data/articlesData";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section id="articles" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800">Articles</h2>
          <a
            href="#Articles"
            className="flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-800"
          >
            View all Articles
            <img
              src="https://img.icons8.com/ios-filled/14/0d9488/up-right.png"
              alt=""
              className="h-3 w-3"
            />
          </a>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;