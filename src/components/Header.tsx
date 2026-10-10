import Image from "next/image";
import NavLinks from "./NavLinks";
import CurrentDate from "./CurrentDate";
import { Suspense } from "react";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
  <header className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center border-b py-4">
      <div className="flex items-center gap-3">
        <Image
          height={50}
          width={50}
          src="/logo.webp"
          alt="Bangla News 24 Logo"
          className="w-12 h-12 object-contain"
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <CurrentDate />
        </div>
      </div>

      <UserInfo />

      <Suspense
        fallback={<div className="text-xs text-neutral-400">Loading...</div>}
      >
        <NavLinks />
      </Suspense>
    </header>
  );
};

export default Header;
