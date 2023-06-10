import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-[2rem] z-50 font-dancing font-bold cursor-pointer"
    >
      Feane
    </Link>
  );
};

export default Logo;
