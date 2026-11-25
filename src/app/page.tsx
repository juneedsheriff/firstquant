import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Projects } from "@/components/sections/Projects";
import { Network } from "@/components/sections/Network";
import { Approach } from "@/components/sections/Approach";
import { Achievements } from "@/components/sections/Achievements";
import { Leadership } from "@/components/sections/Leadership";
import { Insights } from "@/components/sections/Insights";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Solutions />
      <Projects />
      <Network />
      <Approach />
      <Achievements />
      <Leadership />
      <Insights />
      <Careers />
      <Contact />
    </>
  );
}
