import AwardSection from "@/components/AwardSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import DeveloperLogoSlider from "@/components/DeveloperLogoSlider";
import DubaiOasisSection from "@/components/DubaiOasisSection";
import LatestProjects from "@/components/LatestProjects";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main>
      <AwardSection />
      <DeveloperLogoSlider />
      <LatestProjects />
      <DubaiOasisSection />
      <CommunitiesSection />
      <ServicesSection />
    </main>
  );
}