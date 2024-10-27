import coffeeimage1 from "../images/image2.jpg";

const FeaturedCards = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen px-6 py-4 lg:px-28">
      <h2 className="text-4xl md:text-5xl">Featured Coffees</h2>
      {/* Grid elements */}
      <div className="">
        {/* Grid element #1 */}
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="relative">
            <img
              src={coffeeimage1}
              alt="coffee image 1"
              className="w-full h-[520px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl">Espresso</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
