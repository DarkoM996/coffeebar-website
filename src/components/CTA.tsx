import backgroundimage from "../images/image25.jpg";

const CTA = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-[500px]">
      <div className="relative">
        <img
          src={backgroundimage}
          alt="background image"
          className="w-full h-full object-cover"
        />
        {/* Div with text positioned absolute.. on top of the image background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start bg-black/40">
          <h4 className="text-2xl">Don`t wait any longer</h4>
          <h2 className="text-7xl">Subscribe to our newslletter</h2>
          <input
            className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full md:w-2/3"
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
  );
};

export default CTA;
