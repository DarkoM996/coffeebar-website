import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-82px)] bg-stone-100">
      <div className="flex flex-col justify-center items-center w-full h-full gap-8 lg:gap-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-6xl lg:text-9xl text-center px-6 lg:px-28">
              Gateway To The Best Coffee Experience
            </h1>
          </div>
          {/* <h1 className="text-4xl md:text-6xl lg:text-9xl"> </h1> */}
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <button className="text-xl ">Swipe Down</button>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
