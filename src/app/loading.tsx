const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-pulse">
      {/* টপ ব্যানার স্কেলিটন */}
      <div className="h-6 bg-red-100 rounded-md w-1/3"></div>

      {/* গ্রিড লেআউট স্কেলিটন */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* প্রধান সংবাদ স্কেলিটন */}
        <div className="md:col-span-2 space-y-4">
          <div className="h-72 bg-gray-200 rounded-lg w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>

        {/* সর্বাধিক পঠিত সাইডবার স্কেলিটন */}
        <div className="border border-gray-100 p-4 rounded-lg space-y-4">
          <div className="h-5 bg-red-200 rounded w-1/2 mb-4"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-3 items-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3.5 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-100 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
