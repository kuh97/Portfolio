import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Hero />
        <About />
      </main>
    </div>
  );
}
