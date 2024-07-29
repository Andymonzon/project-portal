import { Navbar } from "@/components/Navbar/Navbar";
import { ContainerCards } from "../components/ContainerCards/ContainerCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <ContainerCards />
      </main>
    </>
  );
}
