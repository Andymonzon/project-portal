"use client";

import { useAppSelector } from "@/hooks/store";
import { Card } from "./Card/Card";

export const ContainerCards = () => {
  const projects = useAppSelector((state) => state.projects);
  return (
    <div className="w-full h-full mt-2 flex flex-col gap-1">
      {projects.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};
