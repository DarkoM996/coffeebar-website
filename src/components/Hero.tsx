import { MdKeyboardArrowDown } from "react-icons/md";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full min-h-screen md:h-screen bg-primary_backgroundLighterColor-50">
      {/* Container  */}
      <div className="flex flex-col flex-1 justify-center items-center w-full h-full gap-8 lg:gap-20 py-2">
        {/* Additional text container for better space and overall design look */}
        <div className="flex flex-col justify-center items-center w-full h-fit gap-8 px-6 py-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            {/* Heading Container */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl">Gateway To The</h1>
            {/* Image Container */}
            <div className="relative">
              <img
                src={image1}
                alt="image 1"
                className="w-[150px] h-[150px] object-cover  rounded-tr-[90px] rounded-bl-[90px] md:ml-6"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 w-full">
            {/* Image Container */}
            <div className="relative">
              <img
                src={image2}
                alt="image 1"
                className="w-[150px] h-[150px] object-cover  rounded-tr-[90px] rounded-bl-[90px] md:mr-6"
              />
            </div>
            {/* Heading Container */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-8xl">
                Best Coffee Ever
              </h1>
            </div>
          </div>
          {/* Swipe Down Button with CSS animation pulse */}
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="text-xl ">Swipe Down</button>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
