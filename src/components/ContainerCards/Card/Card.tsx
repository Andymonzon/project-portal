"use client";

import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Menu } from "./Menu/Menu";
import { Project } from "@/store/project/slice";
import { DeleteModal } from "./DeleteModal/DeleteModal";
import Image from "next/image";

type Props = {
  projects: Project[];
};

export const Card = ({ projects }: Props) => {
  const [openMenu, setOpenMenu] = useState({ isOpen: false, id: "" });
  const [screenSize, setScreenSize] = useState("desktop");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState({
    isOpen: false,
    id: "",
  });

  const handleOpenModal = (id: string) => {
    setOpenMenu({ isOpen: true, id });
  };
  return (
    <>
      {projects.map((data) => (
        <article
          key={data.id}
          className="flex flex-col gap-2 p-2 bg-white px-5 lg:hidden"
        >
          <div className="flex justify-between relative">
            <div className="flex flex-col">
              <h3>{data.projectName}</h3>
              <span className="text-xs text-[#00000073] font-semibold">
                Creation date: {new Date(data.createdAt).toLocaleDateString()}
              </span>
            </div>
            <button
              onClick={() => {
                handleOpenModal(data.id);
                setScreenSize("mobile");
              }}
            >
              <HiDotsVertical />
            </button>
            {screenSize === "mobile" && (
              <Menu
                setIsOpenDeleteModal={setIsOpenDeleteModal}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                id={data.id}
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="https://via.placeholder.com/150"
              alt="user image"
              className="w-10 h-10 rounded-full"
              height={150}
              width={150}
            />
            <p className="text-sm">{data.name}</p>
          </div>
        </article>
      ))}
      <div className="hidden lg:flex items-center justify-center h-full w-full px-20">
        <table className="w-full xl:w-3/4 h-max bg-white border border-gray-200 shadow-[0px_2px_8px_0px_#00000066]">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-start">Project Info</th>
              <th className="py-2 px-4 border-b text-start">Project Manager</th>
              <th className="py-2 px-4 border-b text-start">Assigned To</th>
              <th className="py-2 px-4 border-b text-start">Status</th>
              <th className="py-2 px-4 border-b text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((data) => (
              <tr key={data.id}>
                <td className="text-start py-2 border-b">
                  <div className="flex px-4 flex-col">
                    <p className="w-max">{data.projectName}</p>
                    <span className="w-max text-xs text-[#00000073] font-semibold">
                      Creation date:{" "}
                      {new Date(data.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </td>
                <td className="border-b">
                  <div className="flex items-center justify-start px-4 gap-2 py-2">
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="user image"
                      className="w-10 h-10 rounded-full"
                      height={150}
                      width={150}
                    />
                    {data.projectManager}
                  </div>
                </td>
                <td className="border-b">
                  <div className="flex items-center justify-start px-4 gap-2 py-2">
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="user image"
                      className="w-10 h-10 rounded-full"
                      height={150}
                      width={150}
                    />
                    {data.assignedTo}
                  </div>
                </td>
                <td className="text-start py-2 border-b px-4">
                  <div className="px-2 py-1 bg-[#BDBDBD] w-28 text-center rounded">
                    <p>{data.status}</p>
                  </div>
                </td>
                <td className="py-2 px-8 border-b text-start">
                  <div className="relative">
                    <button
                      onClick={() => {
                        handleOpenModal(data.id);
                        setScreenSize("desktop");
                      }}
                    >
                      <HiDotsVertical />
                    </button>
                    {screenSize === "desktop" && (
                      <Menu
                        id={data.id}
                        setOpenMenu={setOpenMenu}
                        setIsOpenDeleteModal={setIsOpenDeleteModal}
                        openMenu={openMenu}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpenDeleteModal.isOpen && (
        <DeleteModal
          id={isOpenDeleteModal.id}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </>
  );
};
