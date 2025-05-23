import { AboutMeMain } from "@/components/aboutMeSection/AboutMeMain";
import { ExperienceMain } from "@/components/experienceSection/ExperienceMain";
import { FooterMain } from "@/components/footer/FooterMain";
import { HelperSection } from "@/components/HelperSection";
import { HeroGradient } from "@/components/heroSection/HeroGradient";
import { HeroMain } from "@/components/heroSection/HeroMain";
import { SubHeroSection } from "@/components/heroSection/SubHeroSection";
import { NavbarMain } from "@/components/navbar/NavbarMain";
import { ProjectsMain } from "@/components/projectsSection/ProjectsMain";
import { AllSkillsSM } from "@/components/skillsSection/AllSkillsSM";
import { SkillsMain } from "@/components/skillsSection/SkillsMain";
import { SubSkills } from "@/components/skillsSection/SubSkills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <FooterMain />
    </main>
  );
}
