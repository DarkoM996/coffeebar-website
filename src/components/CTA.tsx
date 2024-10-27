import backgroundimage from "../images/image25.jpg";

const CTA = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen">
      <img
        src={backgroundimage}
        alt="background image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CTA;
