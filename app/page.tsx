import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { container } from "@/components/ui";

export default function Home() {
  return (
    <>
      <header className={container}>
        <Nav />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}
