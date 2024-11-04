"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Link href="/">
        <Image
          className="!w-20 !h-auto"
          src="/images/tmdbflix_logo.png"
          alt="TBDMFLIX Logo"
          width={50}
          height={30}
        />
      </Link>
    </div>
  );
}
