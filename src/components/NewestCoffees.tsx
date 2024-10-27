import coffeeimage1 from "../images/image14.jpg";
import coffeeimage2 from "../images/image15.jpg";
import coffeeimage3 from "../images/image16.jpg";
import coffeeimage4 from "../images/image17.jpg";

const NewestCoffees = () => {
  return (
    // Custom color is needed for this
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen bg-[#AF9083] px-6 py-4 lg:px-28 text-stone-100">
      <h2 className="text-4xl md:text-5xl py-16">Newest Coffees</h2>
      {/* Grid elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-full">
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
        {/* Grid element #1 */}
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
        {/* Grid element #1 */}
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
        {/* Grid element #1 */}
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

export default NewestCoffees;
