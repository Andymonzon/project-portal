"use client";

import { Form } from "@/components/Form/Form";
import { Navbar } from "@/components/Navbar/Navbar";
import { useAppSelector } from "@/hooks/store";
import { types } from "@/models/navbar.model";

export default function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const store = useAppSelector((state) => state.projects);
  const project = store.find((project) => project.id === id);
  return (
    <>
      <Navbar type={types.EDIT} />
      <main className="flex items-center justify-center h-full">
        <Form data={project} />
      </main>
    </>
  );
}
