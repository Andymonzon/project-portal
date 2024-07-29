import { Navbar } from "@/components/Navbar/Navbar";
import { types } from "@/models/navbar.model";

export default function Home() {
  return (
    <>
      <Navbar type={types.ADD} />
      <main className="bg-white w-full h-full"></main>
    </>
  );
}
