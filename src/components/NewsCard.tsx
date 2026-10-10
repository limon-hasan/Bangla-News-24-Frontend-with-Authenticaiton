import { Article } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }: { news: Article }) => {
  console.log("News card : ", news);
  return (
    <Link href = {`/news/${news.id}`}>
      <div className="card bg-base-100 shadow-sm border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md group">
        <figure className="overflow-hidden">
          {news.imageUrl && (
            <Image
              src={news.imageUrl}
              height={600}
              width={600}
              alt={news.imageAlt || news.title}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </figure>
        <div className="card-body p-4">
          {news.category && (
            <p className="text-red-600 font-semibold text-xs">
              {news.category}
            </p>
          )}
          <h2 className="card-title text-base font-bold transition-colors group-hover:text-red-600">
            {news.title}
          </h2>
          {news.description && (
            <p className="text-xs text-gray-600 line-clamp-3">
              {news.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
