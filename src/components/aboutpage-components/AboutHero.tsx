import backgroundimage from "../../images/image11.jpg";

const AboutHero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto relative w-full h-dvh">
      <div className="relative w-full h-full">
        <img
          src={backgroundimage}
          alt="background image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text with absolute pos */}
    </section>
  );
};

export default AboutHero;
