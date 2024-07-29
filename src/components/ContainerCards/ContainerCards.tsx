"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { Card } from "./Card/Card";
import { useEffect } from "react";
import { loadStateFromLocalStorage } from "@/store/project/slice";

export const ContainerCards = () => {
  const projects = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStateFromLocalStorage());
  }, []);

  return (
    <div className="w-full h-full mt-2 flex flex-col gap-1">
      {projects.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};
