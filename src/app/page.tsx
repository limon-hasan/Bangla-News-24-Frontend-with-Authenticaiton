import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  category?: string;
  imageAlt?: string;
}

export interface Section {
  curationId: string;
  title: string;
  articles: Article[];
}

export interface SectionsApiResponse {
  success: boolean;
  data: Section[];
  count?: number;
  cachedAt?: string;
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 30 },
  });

  const data: SectionsApiResponse = await res.json();
  const sections: Section[] = data.data;

  const mainNews: Article[] = sections[0].articles;
  const otherSections: Section[] = sections.slice(1);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto p-4 mt-4">
        {/* news section */}
        <div className="md:col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-8 mt-8">
            {otherSections.map((other: Section) => (
              <div key={other.curationId}>
                <h1 className="font-bold border-b-2 border-red-700 pb-4">
                  {other.title}
                </h1>

                <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {other.articles?.map((news: Article) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most read section */}
        <div className="col-span-1 p-4">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
