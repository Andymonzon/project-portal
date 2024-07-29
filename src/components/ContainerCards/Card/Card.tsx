"use client";

import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Menu } from "./Menu/Menu";

export const Card = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <article className="flex flex-col gap-2 p-2 bg-white px-5 relative">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3>Card title</h3>
          <span className="text-xs text-[#00000073]">card date</span>
        </div>
        <button onClick={handleOpenModal}>
          <HiDotsVertical />
        </button>
        <Menu setOpenModal={setOpenModal} openModal={openModal} />
      </div>
      <div className="flex items-center gap-2">
        {/* cambiar esto */}
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <p className="text-sm">User Name</p>
      </div>
    </article>
  );
};
