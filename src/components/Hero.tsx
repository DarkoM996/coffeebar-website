import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-82px)] bg-stone-300">
      <div className="flex flex-col justify-center items-center w-full h-full gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-9xl">
          Gateway To The Best
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-9xl"> Coffee Experience</h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <button>Swipe Down</button>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
