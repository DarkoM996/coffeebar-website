import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="border-b border-stone-400">
      <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 py-4 lg:px-28 bg-primary_backgroundLighterColor-200">
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
      </div>
    </nav>
  );
};

export default Navbar;
