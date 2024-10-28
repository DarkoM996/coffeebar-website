import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-stone-200">
      <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 py-4 lg:px-28">
        {/* TypeLogo */}
        <div>
          <h3 className="text-3xl">CoffeeBar</h3>
        </div>
        {/* Icons */}
        <div className="flex justify-center items-center gap-2 text-2xl">
          <MdShoppingBag />
          <MdPerson />
          <IoMdSearch />
          <div className="border-l-2 border-stone-300 pl-2 text-2xl">
            <MdMenu />
          </div>
        </div>
        {/* Menu Dropdown */}
        <ul>
          <Link to="/"></Link>
          <Link to="/about"></Link>
          <Link to="/coffees"></Link>
          <Link to="/contact"></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
