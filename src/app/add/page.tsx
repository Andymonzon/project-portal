import { Form } from "@/components/Form/Form";
import { Navbar } from "@/components/Navbar/Navbar";
import { types } from "@/models/navbar.model";

export default function Home() {
  return (
    <>
      <Navbar type={types.ADD} />
      <main className="bg-white">
        <Form />
      </main>
    </>
  );
}
