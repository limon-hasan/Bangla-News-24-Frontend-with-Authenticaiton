import { Article } from "@/app/page";
import NewsCard from "@/components/NewsCard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ categoryId: string }>;
};

const CategoryNews = async ({ params }: Props) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    {
      next: { revalidate: 60 }, // Next.js 16 uncached fetch error ঠেকানোর জন্য
    },
  );

  const data = await res.json();
  const categoryNews: Article[] = data.data;
  if (!categoryNews) {
    notFound();
    // redirect("/not-found");
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5 pb-2">
        {data.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoryNews.map((news: Article) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
