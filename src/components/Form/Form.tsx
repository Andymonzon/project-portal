"use client";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/store";
import { addProject, editProject, Project } from "@/store/project/slice";
import { useRouter } from "next/navigation";

interface Props {
  data?: Project;
}

export const Form = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState({ message: "", status: false });

  const [formValues, setFormValues] = useState({
    projectName: "",
    description: "",
    assignedTo: "",
    projectManager: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        projectName: data.projectName,
        description: data.description,
        assignedTo: data.assignedTo,
        projectManager: data.projectManager,
        status: data.status,
      });
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm(formValues);
    if (!isValid) {
      setError({
        message: "Please fill in all the required fields",
        status: true,
      });
      return;
    }

    const newProject: Project = {
      id: data ? data.id : crypto.randomUUID(),
      createdAt: data ? data.createdAt : new Date().toISOString(),
      name: "Andy",
      ...formValues,
    };

    dispatch(data ? editProject(newProject) : addProject(newProject));
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-2 flex flex-col gap-4 mt-2 bg-white w-full h-max lg:w-3/4 xl:w-3/4 rounded"
    >
      <div className="flex flex-col">
        <label>Project Name</label>
        <input
          name="projectName"
          type="text"
          value={formValues.projectName}
          onChange={handleChange}
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={formValues.description}
          onChange={handleChange}
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Project manager</label>
        <select
          name="projectManager"
          value={formValues.projectManager}
          onChange={handleChange}
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        >
          <option value="">Select a person</option>
          <option value="Andy">Andy</option>
          <option value="John">John</option>
          <option value="Jane">Jane</option>
          <option value="Bob">Bob</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Assigned to</label>
        <select
          name="assignedTo"
          value={formValues.assignedTo}
          onChange={handleChange}
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        >
          <option value="">Select a person</option>
          <option value="Andy">Andy</option>
          <option value="John">John</option>
          <option value="Jane">Jane</option>
          <option value="Bob">Bob</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Status</label>
        <select
          name="status"
          value={formValues.status}
          onChange={handleChange}
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        >
          <option value="">Enabled</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="suspended">Suspended</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      {error.status && (
        <p className="text-red-500 font-semibold text-center">
          {error.message}
        </p>
      )}
      <button className="bg-[#F5222D] text-white p-2 rounded w-max">
        {data ? "Edit" : "Create"} project
      </button>
    </form>
  );
};

const validateForm = (values: {
  projectName: string;
  description: string;
  assignedTo: string;
  projectManager: string;
  status: string;
}) => {
  return Object.values(values).every((value) => value.trim() !== "");
};
