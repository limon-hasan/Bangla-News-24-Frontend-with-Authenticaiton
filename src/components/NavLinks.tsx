import { Category } from "@/newsCategoryTypes";
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Category[] = data.data;
  // console.log("Data : ", navs);
  const fiterNavs = navs.filter((nav: Category) => nav.scrapable);
  return (
    <div className="flex gap-5 justify-center mt-5">
      <Link href="/">হোম</Link>
      {fiterNavs.map((nav: Category, index: number) => (
        <Link key={index} href={`/category/${nav.slug}`}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
