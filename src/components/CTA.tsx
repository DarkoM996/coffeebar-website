import backgroundimage from "../images/image25.jpg";

const CTA = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[800px]">
      <div className="relative h-full">
        <img
          src={backgroundimage}
          alt="background image"
          className="w-full h-full object-cover"
        />
        {/* Div with text positioned absolute.. on top of the image background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-4 bg-black/50 text-stone-100 px-6 py-4 lg:px-28">
          <h4 className="text-2xl">Don`t wait any longer</h4>
          <h2 className="text-7xl">Subscribe to our newslletter</h2>
          <div className="flex flex-col md:flex-row justify-start items-start w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
            <input
              className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full"
              type="email"
              placeholder="E.g adamsmith93@gmail.com"
              name="email"
            />
            <button className="px-6 py-4 bg-stone-500 text-stone-50 text uppercase rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
