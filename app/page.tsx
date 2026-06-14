import { Hero } from "../components/Hero";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <Hero />
        <div>
          <About />
          <Experience />
          <Articles />
        </div>
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}
