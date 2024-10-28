import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdFax, MdHouse, MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto w-full relative px-6 py-4 lg:px-28 bg-primary_backgroundDarkerColor-950">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full h-full py-6 border-b border-primary_backgroundDarkerColor-800 border-spacing-x-4">
        {/* Flex elements */}
        <div className="">
          <h4 className="text-3xl text-primary_backgroundLighterColor-500">
            CoffeeBar
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="text-2xl mr-2 text-primary_backgroundLighterColor-500"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            className="text-2xl mr-2 text-primary_backgroundLighterColor-500"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            className="text-2xl mr-2 text-primary_backgroundLighterColor-500"
          >
            <FaYoutube />
          </a>
          <a
            href="/"
            className="text-2xl mr-2 text-primary_backgroundLighterColor-500"
          >
            <FaTwitter />
          </a>
          <a
            href="/"
            className="text-2xl mr-2 text-primary_backgroundLighterColor-500"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
      {/* More items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 w-full py-12">
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-3xl text-primary_backgroundLighterColor-500">
            CoffeeBar
          </h4>
          <p className="text-xl text-primary_backgroundLighterColor-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            reprehenderit, voluptas nemo repudiandae eius ipsam mollitia,
            accusamus nobis debitis ipsum velit cum libero quia ea. Sequi
            asperiores accusamus eaque officia.
          </p>
        </div>
        {/* Featured Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-3xl text-primary_backgroundLighterColor-200">
            Featured Coffees
          </h4>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-xl text-primary_backgroundLighterColor-500">
              Espresso
            </p>
            <p className="text-xl text-primary_backgroundLighterColor-500">
              Macchiato
            </p>
            <p className="text-xl text-primary_backgroundLighterColor-500">
              Fredo Espresso
            </p>
            <p className="text-xl text-primary_backgroundLighterColor-500">
              Latte
            </p>
          </div>
        </div>
        {/* Featured Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-3xl text-primary_backgroundLighterColor-200">
            Useful Links
          </h4>
          <div className="flex flex-col justify-start items-start gap-2">
            <a className="text-xl text-primary_backgroundLighterColor-400">
              About
            </a>
            <a className="text-xl text-primary_backgroundLighterColor-400">
              Coffees
            </a>
            <a className="text-xl text-primary_backgroundLighterColor-400">
              Contact
            </a>
            <a className="text-xl text-primary_backgroundLighterColor-400">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Featured Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-3xl text-primary_backgroundLighterColor-200">
            Featured Coffees
          </h4>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdHouse className="text-2xl mr-1" />
              <a className="text-[#bebab2]">London, UK</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdMail className="text-2xl mr-1" />
              <a className="text-[#bebab2]">travellife@contact.com</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdLocalPhone className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 88</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdFax className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 89</a>
            </p>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="p-6 text-center text-primary_backgroundDarkerColor-600">
        <span>© 2024 Copyright:</span>
        <a href="/" className=" text-primary_backgroundLighterColor-500 ml-1">
          CoffeeBar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
