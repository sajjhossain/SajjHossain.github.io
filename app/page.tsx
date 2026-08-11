import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsCloud from "@/components/SkillsCloud";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Links from "@/components/Links";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ExperienceCard />
      <SkillsCloud />
      <Achievements />
      <Projects />
      <Publications />
      <Education />
      <Links />
      <Contact />
    </main>
  );
}
