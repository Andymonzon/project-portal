"use client";

import { useAppDispatch } from "@/hooks/store";
import { addProject, Project } from "@/store/project/slice";
import { useRouter } from "next/navigation";

export const Form = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    const { description, projectName, asiggnedTo, projectManager, status } =
      formData as {
        description: string;
        projectName: string;
        asiggnedTo: string;
        projectManager: string;
        status: string;
      };

    const newProject: Project = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      name: "Andy",
      description,
      projectName,
      asiggnedTo,
      projectManager,
      status,
    };
    dispatch(addProject(newProject));
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-2 flex flex-col gap-4 mt-2"
    >
      <div className="flex flex-col">
        <label>Project Name</label>
        <input
          name="projectName"
          type="text"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Description</label>
        <input
          name="description"
          type="text"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Project manager</label>
        <select
          name="projectManager"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        >
          <option value="">Select a person</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Asiggned to</label>
        <select
          name="asiggnedTo"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        >
          <option value="">Select a person</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Status</label>
        <select
          name="status"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        >
          <option value="">Enabled</option>
        </select>
      </div>
      <button className="bg-[#F5222D] text-white p-2 rounded w-max">
        Create project
      </button>
    </form>
  );
};
