import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import { container } from "@/components/ui";

export default function Home() {
  return (
    <>
      <header className={container}>
        <Nav />
      </header>
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}
