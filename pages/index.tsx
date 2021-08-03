import Head from "next/head";
import Image from "next/image";
import { HeaderNavBar } from "../src/components/headerNavBar/HeaderNavBar";
import { AboutSection } from "../src/components/aboutSection/AboutSection";
import { SkillContainer } from "../src/components/skill/SkillContainer";
import { ProjectContainer } from "../src/components/projects/ProjectContainer";

export default function Home() {
  return (
    <div>
      <HeaderNavBar />
      <AboutSection />
      <SkillContainer />
      <ProjectContainer />
    </div>
  );
}
