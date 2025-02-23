import { HeroSection } from "../../components/Section/Hero";
import StatsSection from "../../components/Section/Stats";
import BrandSection from "../../components/Section/Brand";
import CampaignSection from "../../components/Section/Campaign";
import TestimonialSection from "../../components/Section/Testimonial";

function Home() {

  return (
    <>
      <HeroSection />
      <StatsSection />
      <BrandSection />
      <CampaignSection amount={ 4 } />
      <TestimonialSection />
    </>
  );
}

export default Home;