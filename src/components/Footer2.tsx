import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto w-full  relative px-6 py-4 lg:px-28">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full h-full">
        {/* Flex elements */}
        <div className="">
          <h4 className="text-3xl">CoffeeBar</h4>
        </div>
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl mr-2">
            <FaInstagram />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaFacebook />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaYoutube />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaTwitter />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaPinterest />
          </a>
        </div>
      </div>
      {/* More items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 w-full py-12">
        <div>
          <h4 className="text-3xl">CoffeeBar</h4>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            reprehenderit, voluptas nemo repudiandae eius ipsam mollitia,
            accusamus nobis debitis ipsum velit cum libero quia ea. Sequi
            asperiores accusamus eaque officia.
          </p>
        </div>
        {/* Featured Section */}
        <div>
          <h4 className="text-3xl">Featured Coffees</h4>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
        </div>
        {/* Featured Section */}
        <div>
          <h4 className="text-3xl">Featured Coffees</h4>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
        </div>
        {/* Featured Section */}
        <div>
          <h4 className="text-3xl">Featured Coffees</h4>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
          <p className="text-xl">Espresso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
