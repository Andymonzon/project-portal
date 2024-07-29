"use client";

import Link from "next/link";
import { TiPlus } from "react-icons/ti";

export const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="border-b border-[#BDBDBD] px-5 py-2">
        <h1 className="text-[#BDBDBD]">ProjectPortal</h1>
      </div>
      <div className="flex justify-between px-5 py-2">
        <h2>My projects</h2>
        <Link
          href="/add"
          className="text-white bg-[#F5222D] rounded p-2 flex items-center gap-1"
        >
          <TiPlus color="fff" />
          Add project
        </Link>
      </div>
    </div>
  );
};
