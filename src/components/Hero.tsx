import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-90px)] bg-stone-300">
      <div className="flex flex-col justify-center items-center w-full h-full gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-9xl">
          Gateway To The Best Coffee Experience
        </h1>
        <div>
          <button>Swipe Down</button>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
