import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // I don't need active link here because this web app and design doesn't require it
  // the classes fixed top-0 left-0 bg-transparent w-full z-10 with text white gives navbar on top of hero section design. Just add z index of lets z-10 with full width (w-full) so it stays on top of the background picture!

  return (
    <nav className="border-b border-stone-200 sticky top-0 z-20">
      <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 py-4 lg:px-28">
        {/* TypeLogo */}
        <div>
          <h3 className="text-3xl">CoffeeBar</h3>
        </div>
        {/* Icons */}
        <div className="flex justify-center items-center gap-2 text-3xl">
          <MdShoppingBag />
          <MdPerson />
          <IoMdSearch />
          {/* Hamburger Menu */}
          <div
            onClick={handleClick}
            className="border-l-2 border-stone-300 pl-2 text-3xl z-20"
          >
            {nav! ? <FaTimes className="text-stone-300" /> : <MdMenu />}
          </div>
        </div>
        {/* Menu Dropdown */}
        <ul
          onClick={handleClick}
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center gap-8 lg:gap-16 bg-primary_backgroundDarkerColor-950 text-primary_backgroundLighterColor-100 z-10"
          }
        >
          <Link
            to="/"
            className="text-5xl font-bold text-primary_backgroundLighterColor-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-5xl font-bold text-primary_backgroundLighterColor-200"
          >
            About
          </Link>
          <Link
            to="/coffees"
            className="text-5xl font-bold text-primary_backgroundLighterColor-200"
          >
            Coffee
          </Link>
          <Link
            to="/contact"
            className="text-5xl font-bold text-primary_backgroundLighterColor-200"
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
