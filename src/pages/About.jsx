import Layout from "../components/Layout";
import TeamSection from "../components/Section/Team";
import { TimelineSection } from "../components/Section/Timeline";
import FaqsSection from "../components/Section/Faq";
import NewsLetter from "../components/Section/Newsletter";
import { HeroSection } from "../components/Section/Hero";

function About() {

  return (
    <Layout>
      <HeroSection />
      <TimelineSection />
      <TeamSection />
      <FaqsSection />
      <NewsLetter />
    </Layout>
  );
}

export default About;