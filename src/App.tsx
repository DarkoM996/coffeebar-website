import FeaturedCards from "./components/FeaturedCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewestCoffees from "./components/NewestCoffees";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCards />
      <NewestCoffees />
    </>
  );
};

export default App;
