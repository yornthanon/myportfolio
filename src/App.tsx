import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About embedded />
      <Education embedded />
      <Skills embedded />
      <Projects embedded />
      <Services embedded />
      <Contact embedded />
    </Layout>
  );
}
