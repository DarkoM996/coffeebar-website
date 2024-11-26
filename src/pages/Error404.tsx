import image from "../images/error404image.jpg";

const Error404 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative">
      <div className="relative h-full">
        <img
          src={image}
          alt="error 404 image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Error404;
