import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface MostReadArticle {
  id: string;
  title: string;
  description?: string | null;
  link?: string;
  imageUrl?: string | null;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const newsList: MostReadArticle[] = Array.isArray(data)
    ? data
    : data?.data || [];

  return (
    <div className="bg-base-100 border border-gray-200 p-4 rounded-lg shadow-sm">
      <h2 className="font-bold text-lg border-b-2 border-red-700 pb-2 mb-4 text-red-700">
        সর্বাধিক পঠিত
      </h2>

      <div className="flex flex-col divide-y divide-gray-100">
        {newsList.slice(0, 8).map((item, index) => (
          <Link
            key={item.id || index}
            href={`/news/${item.id}`}
            className="flex items-start gap-3 py-3 hover:bg-gray-50 px-2 rounded cursor-pointer transition-colors"
          >
            <span className="text-xl font-bold text-red-600 min-w-5">
              {index + 1}
            </span>

            <div className="flex-1">
              <h3 className="text-sm font-semibold hover:text-red-700 line-clamp-2">
                {item.title}
              </h3>
            </div>

            {item.imageUrl && (
              <div className="relative w-16 h-12 flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
