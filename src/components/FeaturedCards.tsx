import coffeeimage1 from "../images/image2.jpg";
import coffeeimage2 from "../images/image3.jpg";
import coffeeimage3 from "../images/image4.jpg";
import coffeeimage4 from "../images/image5.jpg";

const FeaturedCards = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen px-6 py-4 lg:px-28">
      <h2 className="text-4xl md:text-5xl">Featured Coffees</h2>
      {/* Grid elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Grid element #1 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative">
            <img
              src={coffeeimage1}
              alt="coffee image 1"
              className="w-full h-[485px] object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Espresso</h4>
          </div>
        </div>
        {/* Grid element #2 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative">
            <img
              src={coffeeimage2}
              alt="coffee image 2"
              className="w-full h-[485px] object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Espresso</h4>
          </div>
        </div>
        {/* Grid element #3 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative">
            <img
              src={coffeeimage3}
              alt="coffee image 3"
              className="w-full h-[485px] object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Espresso</h4>
          </div>
        </div>
        {/* Grid element #4 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative">
            <img
              src={coffeeimage4}
              alt="coffee image 4"
              className="w-full h-[485px] object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Espresso</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
