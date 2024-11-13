import { FaCoffee } from "react-icons/fa";

const AboutWhyUsSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-8 lg:px-16 lg:py-24">
      <div className="flex flex-col justify-center items-center gap-6 md:gap-12 lg:gap-20">
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl lg:text-6xl">Why Us?</h2>
        </div>
        {/* Container with icons and text */}
        <div className="flex flex-col md:flex-row justify-center items-start w-full h-full gap-6 md:gap-8 lg:gap-16 lg:px-28">
          {/* Stuff #1 */}
          <div className="flex flex-row justify-center items-start gap-4 md:gap-6">
            <div className=" bg-stone-300 rounded-full flex flex-col justify-center items-start text-2xl p-4">
              <FaCoffee className="text-4xl text-black" />
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h4 className="text-2xl md:text-4xl w-full">Skilled barristas</h4>
              <p className="lg:w-3/4">
                Dedication towards a high quality of making coffee
              </p>
            </div>
          </div>
          {/* Stuff #2 */}
          <div className="flex flex-row justify-center items-start gap-4 md:gap-6">
            <div className=" bg-stone-300 rounded-full flex flex-col justify-center items-start text-2xl p-4">
              <FaCoffee className="text-4xl text-black" />
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h4 className="text-2xl md:text-4xl w-full">Skilled barristas</h4>
              <p className="lg:w-3/4">
                Dedication towards a high quality of making coffee
              </p>
            </div>
          </div>
          {/* Stuff #3 */}
          <div className="flex flex-row justify-center items-start gap-4 md:gap-6">
            <div className=" bg-stone-300 rounded-full flex flex-col justify-center items-start text-2xl p-4">
              <FaCoffee className="text-4xl text-black" />
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h4 className="text-2xl md:text-4xl w-full">Skilled barristas</h4>
              <p className="lg:w-3/4">
                Dedication towards a high quality of making coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUsSection;
