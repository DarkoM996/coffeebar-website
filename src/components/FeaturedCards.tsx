import coffeeimage1 from "../images/image2.jpg";
import coffeeimage2 from "../images/image3.jpg";
import coffeeimage3 from "../images/image11.jpg";
import coffeeimage4 from "../images/image5.jpg";
import coffeeimage5 from "../images/image19.jpg";
import coffeeimage6 from "../images/image24.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";

const FeaturedCards = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen bg-white grid grid-cols-1 gap-6 px-6 py-4 lg:px-16 xl:px-28">
      <h2 className="text-4xl md:text-5xl py-16">Featured Coffees</h2>
      {/* Grid elements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Grid element #1 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative w-full h-[420px]">
            <img
              src={coffeeimage1}
              alt="coffee image 1"
              className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Espresso</h4>
          </div>
        </div>
        {/* Grid element #2 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative w-full h-[420px]">
            <img
              src={coffeeimage2}
              alt="coffee image 2"
              className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Fredo Espresso</h4>
          </div>
        </div>
        {/* Grid element #3 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative w-full h-[420px]">
            <img
              src={coffeeimage3}
              alt="coffee image 3"
              className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Macchiato</h4>
          </div>
        </div>
        {/* Grid element #4 */}
        <div className="flex flex-col justify-center items-center gap-6 h-auto w-full">
          <div className="relative w-full h-[420px]">
            <img
              src={coffeeimage4}
              alt="coffee image 4"
              className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl">Americano</h4>
          </div>
        </div>
      </div>
      {/* CSS Div Divider */}
      <div className="flex flex-grow border-b border-stone-300 py-12"></div>
      {/* About Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 py-16 w-full h-full">
        <div className="relative h-[500px]">
          <img
            src={coffeeimage5}
            alt="coffee image 5"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Absolute position div with text and CTA */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 bg-black/50 rounded-2xl px-6 py-4 lg:px-16 text-stone-300">
            <h3 className="text-3xl lg:text-4xl">Skilled Barristas</h3>
            <p className="text-xl">
              Skilled Baristas are essential part of our coffee culture. Read
              what else is a strong part of our values.
            </p>
            {/* Button + icon div */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 hover:border-b">
              <button className="text uppercase text-xl p-2">Learn More</button>
              <IoMdArrowRoundForward className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="relative h-[500px]">
          <img
            src={coffeeimage6}
            alt="coffee image 6"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Absolute position div with text and CTA */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 bg-black/50 rounded-2xl px-6 py-4 lg:px-16 text-stone-300">
            <h3 className="text-3xl lg:text-4xl text-center">
              Unforgettable Experiences
            </h3>
            <p className="text-xl">
              How a customer enjoys in our coffee is just one step on how we
              focus to provide you unforgettable experiences.
            </p>
            {/* Button + icon div */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 hover:border-b">
              <button className="text uppercase text-xl p-2">Learn More</button>
              <IoMdArrowRoundForward className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
