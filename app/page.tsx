import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import Sectiondivider from "@/components/sectiondivider";
import Sectiondivider2 from "@/components/sectiondivider2";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <Sectiondivider />
      <About />
      <Sectiondivider2 />
      <Projects />
      <Sectiondivider />
      <Skills />
      <Sectiondivider />

      <Experience />
      <Contact />
    </main>
  );
}
