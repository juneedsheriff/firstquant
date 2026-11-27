import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Projects } from "@/components/sections/Projects";
import { Network } from "@/components/sections/Network";
import { Approach } from "@/components/sections/Approach";
import { Achievements } from "@/components/sections/Achievements";
import { Leadership } from "@/components/sections/Leadership";
import { MoreLinks } from "@/components/sections/MoreLinks";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Solutions />
      <Projects />
      <Network />
      <Approach />
      <Achievements />
      <Leadership />
      <MoreLinks />
      <Contact />
    </>
  );
}
