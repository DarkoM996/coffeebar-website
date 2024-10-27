import FeaturedCards from "./components/FeaturedCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewestCoffees from "./components/NewestCoffees";
import CTA from "./components/CTA";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCards />
      <NewestCoffees />
      <CTA />
    </>
  );
};

export default App;
