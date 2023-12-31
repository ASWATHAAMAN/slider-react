import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <nav className="flex gap-[1rem] mx-auto  justify-between px-[4rem] text-white font-[600] h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex items-center gap-[1rem] font-mono ">
          <BsGlobe2 />
          <h2>TRUST ME</h2>
        </div>
        <div className="flex items-center gap-[2rem] font-mono">
          <a href="#" className="underline decoration-yellow-600 decoration-2">
            HOME
          </a>
          <a
            href="#"
            className="hover:underline decoration-yellow-600 decoration-2"
          >
            HOLIDAYS
          </a>
          <a
            href="#"
            className="hover:underline decoration-yellow-600 decoration-2"
          >
            DESTINATION
          </a>
          <a
            href="#"
            className="hover:underline decoration-yellow-600 decoration-2"
          >
            FLIGHTS
          </a>
          <a
            href="#"
            className="hover:underline decoration-yellow-600 decoration-2"
          >
            OFFERS
          </a>
          <a
            href="#"
            className="hover:underline decoration-yellow-600 decoration-2"
          >
            CONTACTS
          </a>
          <AiOutlineSearch />
          <BiSolidUser />
        </div>
      </nav>
    </>
  );
};

export { Header };
