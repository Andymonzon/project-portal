import { Navbar } from "@/components/Navbar/Navbar";
import { ContainerCards } from "../components/ContainerCards/ContainerCards";
import { types } from "@/models/navbar.model";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar type={types.HOME} />
      <main className="flex flex-col items-center justify-center h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ContainerCards />
        </Suspense>
      </main>
    </>
  );
}
