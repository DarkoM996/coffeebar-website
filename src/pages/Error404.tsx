import image from "../images/error404image.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Error404 = () => {
  // Page needs redesign per original Figma design.
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative">
      <div className="relative h-full">
        <img
          src={image}
          alt="error 404 image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-2 bg-black/40">
          <h1 className="text-4xl md:text-5xl lg:text-9xl text-primary_backgroundLighterColor-100">
            Error 404
          </h1>
          <p className="text-primary_backgroundLighterColor-200">
            We are sorry! The page you are looking for doesn`t exist.
          </p>
          <div className="py-4 flex flex-row justify-center items-center gap-2 text-white">
            <Link to="/" className="hover:underline">
              Back To Homepage
            </Link>
            <BsArrowRight className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
