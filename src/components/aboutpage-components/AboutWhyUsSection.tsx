import { FaCoffee } from "react-icons/fa";

const AboutWhyUsSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-8 lg:px-24">
      <div>
        <div>
          <h2>Why Us?</h2>
        </div>
        {/* Container with icons and text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:px-48">
          {/* Stuff #1 */}
          <div>
            <div className="w-[32px] h-[32px] bg-stone-300 flex flex-col justify-center items-center text-2xl">
              <FaCoffee />
            </div>
            <h4>Skilled barristas</h4>
            <p>Dedication towards a high quality of making coffee</p>
          </div>
          {/* Stuff #1 */}
          <div>
            <div className="w-[32px] h-[32px] bg-stone-300 flex flex-col justify-center items-center text-2xl">
              <FaCoffee />
            </div>
            <h4>Skilled barristas</h4>
            <p>Dedication towards a high quality of making coffee</p>
          </div>
          {/* Stuff #1 */}
          <div>
            <div className="w-[32px] h-[32px] bg-stone-300 flex flex-col justify-center items-center text-2xl">
              <FaCoffee />
            </div>
            <h4>Skilled barristas</h4>
            <p>Dedication towards a high quality of making coffee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUsSection;
