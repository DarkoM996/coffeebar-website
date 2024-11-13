import AboutHero from "../components/aboutpage-components/AboutHero";
import AboutValueOne from "../components/aboutpage-components/AboutValueOne";
import AboutValueTwo from "../components/aboutpage-components/AboutValueTwo";
import AboutWhyUsSection from "../components/aboutpage-components/AboutWhyUsSection";
import CTA from "../components/CTA";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutWhyUsSection />
      <AboutValueOne />
      <AboutValueTwo />
      <CTA />
    </>
  );
};

export default AboutPage;
