import Layout from "../components/Layout";
import { HeroSection } from "../components/Section/Hero";
import StatsSection from "../components/Section/Stats";
import BrandSection from "../components/Section/Brand";
import CampaignSection from "../components/Section/Campaign";
import JoinNow from "../components/Section/JoinNow";
import Testimonial from "../components/Section/Testimonial";

function Home() {

  return (
    <Layout >
      <HeroSection />
      <StatsSection />
      <BrandSection />
      <CampaignSection />
      <Testimonial />
      <JoinNow />
    </Layout>
  );
}

export default Home;