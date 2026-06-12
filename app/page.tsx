import AwardSection from "@/components/AwardSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import DeveloperLogoSlider from "@/components/DeveloperLogoSlider";
import DubaiOasisSection from "@/components/DubaiOasisSection";
import LatestInsights from "@/components/LatestInsights";
import LatestProjects from "@/components/LatestProjects";
import LatestProperties from "@/components/LatestProperties";
import ServicesSection from "@/components/ServicesSection";
import SpendDayWithTanzanga from "@/components/SpendDayWithTanzanga";
import SSpendDayWithTanzanga from "@/components/SpendDayWithTanzanga";
import StickyContactButtons from "@/components/StickyContactButtons";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <AwardSection />
      <DeveloperLogoSlider />
      <LatestProjects />
      <DubaiOasisSection />
      <CommunitiesSection />
      <ServicesSection />
      <LatestProperties />
      <TestimonialsSection />
      <LatestInsights />
      <SpendDayWithTanzanga />
      <StickyContactButtons />
    </main>
  );
}