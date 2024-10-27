// import { MdKeyboardArrowDown } from "react-icons/md";
import image1 from "../images/image1.jpg";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-82px)] bg-stone-100">
      <div className="flex flex-col justify-center items-center w-full h-full gap-8 lg:gap-20">
        <div className="flex flex-col justify-center items-center w-full h-full px-6 py-4 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <h1 className="text-5xl md:text-6xl lg:text-8xl">Gateway To The</h1>
            <div className="relative">
              <img
                src={image1}
                alt="image 1"
                className="hidden md:block w-[200px] h-[200px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="relative">
              <img
                src={image1}
                alt="image 1"
                className="hidden md:block w-[200px] h-[200px] object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-8xl">
                Best Coffee Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

{
  /* <div className="flex flex-col justify-center items-center gap-2">
  <button className="text-xl ">Swipe Down</button>
  <MdKeyboardArrowDown className="text-2xl" />
</div> */
}
