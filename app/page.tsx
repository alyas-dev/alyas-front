import FooterSection from "@/components/homepage/footer";
import HeroSection from "@/components/homepage/hero-section";
import Integrations from "@/components/homepage/integrations";
import PricingTable from "./pricing/_component/pricing-table";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Integrations />
      <PricingTable />
      <FooterSection />
    </>
  );
}
