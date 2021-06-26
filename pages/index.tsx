import Head from "next/head";
import Image from "next/image";
import { HeaderNavBar } from "../src/components/headerNavBar/HeaderNavBar";
import { AboutSection } from "../src/components/aboutSection/AboutSection";

export default function Home() {
  return (
    <div>
      <HeaderNavBar />
      <AboutSection />
    </div>
  );
}
