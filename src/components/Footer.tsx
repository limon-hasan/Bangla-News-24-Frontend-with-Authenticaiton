import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const categories = [
    { name: "হোম", href: "/" },
    { name: "রাজনীতি", href: "/category/02" },
    { name: "বিশ্ব", href: "/category/03" },
    { name: "অর্থনীতি", href: "/category/04" },
    { name: "স্বাস্থ্য", href: "/category/05" },
    { name: "খেলা", href: "/category/06" },
    { name: "প্রযুক্তি", href: "/category/07" },
  ];

  return (
    <footer className="mt-20 bg-neutral-900 text-neutral-300 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ব্র্যান্ড ও বিবরণ */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Bangla News 24"
                width={38}
                height={38}
                className="w-9 h-9 object-contain brightness-110"
              />
              <span className="text-xl font-bold text-white tracking-wide">
                Bangla News <span className="text-red-600">24</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              বস্তুনিষ্ঠ সংবাদ ও সত্যের নির্ভুল তথ্য পরিবেশনে আমরা সর্বদা
              সচেষ্ট। ২৪ ঘণ্টা সর্বশেষ খবরের নির্ভরযোগ্য প্ল্যাটফর্ম।
            </p>
          </div>

          {/* প্রধান ক্যাটাগরি */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base border-b border-neutral-700 pb-1.5">
              বিভাগসমূহ
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="hover:text-red-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* জরুরি লিংক */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base border-b border-neutral-700 pb-1.5">
              প্রয়োজনীয় লিংক
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  গোপনীয়তা নীতি
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  ব্যবহারের শর্তাবলি
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  বিজ্ঞাপন দিন
                </Link>
              </li>
            </ul>
          </div>

          {/* সম্পাদকীয় ও যোগাযোগ */}
          <div className="space-y-2 text-sm text-neutral-400">
            <h3 className="text-white font-semibold mb-3 text-base border-b border-neutral-700 pb-1.5">
              যোগাযোগ
            </h3>
            <p>
              <span className="text-neutral-200 font-medium">
                প্রধান কার্যালয়:
              </span>{" "}
              ঢাকা, বাংলাদেশ
            </p>
            <p>ইমেইল: news@banglanews24.com</p>
            <p>বার্তা কক্ষ: +৮৮০ ১৭০০০০০০০০</p>
          </div>
        </div>

        {/* নিচের কপিরাইট বার */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <p>
            © {new Date().getFullYear()} Bangla News 24। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p>সব খবর সবার আগে</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
