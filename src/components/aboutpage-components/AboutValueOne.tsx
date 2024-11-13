import image from "../../images/image7.jpg";

const AboutValueOne = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-8 md:py-16 lg:py-32">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full h-full gap-6 lg:gap-y-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl lg:w-1/3">
            Coffee Shop`s story
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            impedit corporis, fugit quae ipsam, doloremque error distinctio
            aspernatur quibusdam pariatur deleniti suscipit vero eveniet veniam
            reiciendis ullam eius itaque voluptas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            impedit corporis, fugit quae ipsam, doloremque error distinctio
            aspernatur quibusdam pariatur deleniti suscipit vero eveniet veniam
            reiciendis ullam eius itaque voluptas?
          </p>
        </div>
        <div className="relative h-[500px] lg:h-[700px] md:col-span-2 lg:col-span-6">
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutValueOne;
