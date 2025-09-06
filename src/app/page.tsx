import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import prisma from "@/lib/prisma";

async function getAboutData() {
  const aboutData = await prisma.user.findFirst({
    where: { name: "김의현" },
  });
  return aboutData;
}

export default async function Home() {
  const aboutData = await getAboutData();

  return (
    <>
      <Hero aboutData={aboutData || undefined} />
      <About aboutData={aboutData || undefined} />
      <Skills />
      <Projects />
      <Contact aboutData={aboutData || undefined} />
    </>
  );
}
