import Image from "next/image";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ newsId: string }>;
};

const NewsDetails = async ({ params }: Props) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  const news = data.data;
  console.log("News : ", news);
  if(!news) {
    notFound()
    // redirect("/not-found");
  }

  const paragraphs = news?.text
    ? news.text.split("\n").filter((p: string) => p.trim() !== "")
    : [];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 text-center md:text-left">
        {news?.title}
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-b border-t border-gray-200 py-2.5 my-5">
        <span className="font-medium text-gray-700">
          {news?.author || "অনলাইন ডেস্ক"}
        </span>
        <span>•</span>
        <span>{news?.publishedAt || news?.date || "১০ অক্টোবর, ২০২৬"}</span>
        <span>•</span>
        <span>{news?.category || "জাতীয়"}</span>
      </div>

      {news?.imageUrl && (
        <div className="relative w-full h-[320px] md:h-[460px] my-6 rounded-lg overflow-hidden shadow-sm">
          <Image
            src={news.imageUrl}
            alt={news.title || "News Image"}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed text-justify mt-6">
        {paragraphs.length > 0 ? (
          paragraphs.map((para: string, index: number) => (
            <p key={index}>{para}</p>
          ))
        ) : (
          <p>{news?.text}</p>
        )}
      </div>
    </article>
  );
};

export default NewsDetails;
