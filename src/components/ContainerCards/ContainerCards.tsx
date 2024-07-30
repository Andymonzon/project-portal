"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { Card } from "./Card/Card";
import { useEffect } from "react";
import { initializeState } from "@/store/project/slice";
import { Pagination } from "../Pagination/Pagination";
import { useSearchParams } from "next/navigation";

export const ContainerCards = () => {
  const itemsPerPage = 4;
  const projects = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  useEffect(() => {
    const localStorageProjects = JSON.parse(
      localStorage.getItem("redux_project_state") || "[]"
    );
    if (localStorageProjects) {
      dispatch(initializeState(localStorageProjects));
    }
  }, []);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="w-full h-full mt-2 flex flex-col gap-1">
      <Card projects={currentProjects} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
