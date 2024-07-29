"use client";

import { types } from "@/models/navbar.model";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

interface Props {
  type: types;
}
export const Navbar = ({ type }: Props) => {
  return (
    <div className="bg-white">
      <div className="border-b-2 border-[#BDBDBD] px-5 py-2">
        <h1 className="text-[#BDBDBD]">ProjectPortal</h1>
      </div>
      <div className="flex justify-between px-5 py-2 items-center border-b-2 border-[#BDBDBD]">
        <div className="flex gap-2">
          {type === types.EDIT || type === types.ADD ? (
            <div className="flex items-center gap-2">
              <Link href={"/"} className="flex items-center gap-2">
                <FaArrowLeft color="#000000A6" />
                <p className="text-sm text-[#000000A6]">Back</p>
              </Link>
            </div>
          ) : null}
          <h2 className="font-semibold">{type} projects</h2>
        </div>
        {type === types.HOME && (
          <Link
            href="/add"
            className="text-white bg-[#F5222D] rounded p-2 flex items-center gap-1"
          >
            <TiPlus color="fff" />
            Add project
          </Link>
        )}
      </div>
    </div>
  );
};
