import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
