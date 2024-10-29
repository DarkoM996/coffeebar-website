import backgroundimage from "../../images/image11.jpg";

const AboutHero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto relative w-full h-[calc(100vh-81px)]">
      <div className="relative w-full h-full">
        <img
          src={backgroundimage}
          alt="background image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text with absolute pos */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white">
        {/* div for spacing for the entire group */}
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center gap-6 lg:gap-48">
            {/* Div for Spacing for these two headers only */}
            <div className="flex flex-col justify-center items-center gap-2">
              <h4 className="text-xl md:text-2xl">Life is short</h4>
              <h1 className="text-5xl md:text-6xl lg:text-8xl">
                Enjoy Your Coffee
              </h1>
            </div>
            {/* another div for button + icon */}
            <div className="flex flex-col items-center gap-1">
              <button>Swipe</button>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
