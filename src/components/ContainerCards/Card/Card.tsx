"use client";

import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Menu } from "./Menu/Menu";
import { Project } from "@/store/project/slice";

type Props = {
  data: Project;
};

export const Card = ({ data }: Props) => {
  console.log(data);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <article className="flex flex-col gap-2 p-2 bg-white px-5 relative">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3>{data.projectName}</h3>
          <span className="text-xs text-[#00000073]">
            {JSON.stringify(data.createdAt).split('"')[1]}
          </span>
        </div>
        <button onClick={handleOpenModal}>
          <HiDotsVertical />
        </button>
        <Menu id={data.id} setOpenModal={setOpenModal} openModal={openModal} />
      </div>
      <div className="flex items-center gap-2">
        {/* cambiar esto */}
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <p className="text-sm">{data.name}</p>
      </div>
    </article>
  );
};
