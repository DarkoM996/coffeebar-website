import CTA from "../components/CTA";
import FeaturedCards from "../components/FeaturedCards";
import Footer2 from "../components/Footer2";
import Hero from "../components/Hero";
import NewestCoffees from "../components/NewestCoffees";
// import Footer from "./../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCards />
      <NewestCoffees />
      <CTA />
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
};

export default HomePage;
