import About from "@/components/about";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import Sectiondivider from "@/components/sectiondivider";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <Sectiondivider />
      <About />
      <Projects />
    </main>
  );
}
