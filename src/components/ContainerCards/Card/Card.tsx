"use client";

import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Menu } from "./Menu/Menu";
import { Project } from "@/store/project/slice";

type Props = {
  projects: Project[];
};

export const Card = ({ projects }: Props) => {
  const [openModal, setOpenModal] = useState({ isOpen: false, id: "" });
  const [screenSize, setScreenSize] = useState("desktop");

  const handleOpenModal = (id: string) => {
    setOpenModal({ isOpen: true, id });
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
              <span className="text-xs text-[#00000073]">
                {JSON.stringify(data.createdAt).split('"')[1]}
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
                openModal={openModal}
                setOpenModal={setOpenModal}
                id={data.id}
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* cambiar esto */}
            <img
              src="https://via.placeholder.com/150"
              alt="user image"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-sm">{data.name}</p>
          </div>
        </article>
      ))}
      <div className="hidden lg:flex items-center justify-center h-full w-full px-20">
        <table className="w-full xl:w-3/4 xl:h-3/4 2xl:h-4/5 bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Project Info</th>
              <th className="py-2 px-4 border-b">Project Manager</th>
              <th className="py-2 px-4 border-b">Assigned To</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((data) => (
              <tr key={data.id}>
                <td className="text-center py-2 border-b">
                  {data.projectName}
                </td>
                <td className="border-b">
                  <div className="flex items-center justify-center gap-2 py-2">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="user image"
                      className="w-10 h-10 rounded-full"
                    />
                    {data.projectManager}
                  </div>
                </td>
                <td className="border-b">
                  <div className="flex items-center justify-center gap-2 py-2">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="user image"
                      className="w-10 h-10 rounded-full"
                    />
                    {data.assignedTo}
                  </div>
                </td>
                <td className="text-center py-2 border-b">{data.status}</td>
                <td className="py-2 px-4 border-b text-center">
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
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
