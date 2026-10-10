import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="relative mb-4 flex items-center justify-center">
          <span className="text-8xl md:text-9xl font-black text-red-100 select-none tracking-widest">
            ৪০৪
          </span>
          <span className="absolute text-3xl md:text-4xl font-extrabold text-red-700">
            404
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          আপনি যে সংবাদ বা পাতাটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা লিংকটি
          ভুল রয়েছে।
        </p>

        {/* একশন বাটনসমূহ */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <Link
            href="/"
            className="btn bg-red-700 hover:bg-red-800 text-white font-medium px-6 border-none shadow-sm transition-all"
          >
            হোমপেজে ফিরে যান
          </Link>

          <Link
            href="/"
            className="btn btn-outline border-red-700 text-red-700 hover:bg-red-50 hover:border-red-700 font-medium px-6"
          >
            সর্বশেষ সংবাদ
          </Link>
        </div>

        {/* নিচের অতিরিক্ত হেল্প টেক্সট */}
        <div className="mt-10 pt-6 border-t border-gray-100 w-full text-xs text-gray-400">
          Bangla News 24 • ২৪ ঘণ্টা বস্তুনিষ্ঠ সংবাদের সাথে
        </div>
      </div>
    </main>
  );
};

export default NotFound;
