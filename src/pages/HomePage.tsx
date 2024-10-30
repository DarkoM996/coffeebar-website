import CTA from "../components/CTA";
import FeaturedCards from "../components/FeaturedCards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewestCoffees from "../components/NewestCoffees";
import Footer from "./../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCards />
      <NewestCoffees />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
