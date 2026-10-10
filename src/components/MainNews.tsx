import Image from "next/image";
import Link from "next/link";

export interface News {
  id: string;
  title: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  if (!news || news.length === 0) return null;

  const [firstNews, ...othersNews] = news;

  return (
    <div className="flex gap-2">
      <Link href={`/news/${firstNews.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            {firstNews.imageUrl && (
              <Image
                src={firstNews.imageUrl}
                height={600}
                width={600}
                alt={firstNews.imageAlt || firstNews.title}
              />
            )}
          </figure>
          <div className="card-body">
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      <div className="grid gap-2">
        {othersNews.slice(0, 4).map((othernews) => (
          <Link key = {othernews.id} href = {`/news/${othernews.id}`}>
            <div
              className="card bg-base-100 border border-gray-300 p-5"
              key={othernews.id}
            >
              <p className="text-red-600 font-semibold">{othernews.category}</p>
              <div>{othernews.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
