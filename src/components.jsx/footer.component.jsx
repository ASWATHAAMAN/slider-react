import { FaLocationArrow } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
const Footer = ({prevSlide, nextSlide}) => {
  const prevHandler = () => {
    prevSlide();
  };
  const nextHandler = () => {
    nextSlide();
  };
  return (
    <>
      <div className="flex items-center px-[4rem] text-white mx-auto h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className=" mt-[1rem] mb-[1rem] flex items-center gap-[1rem] cursor-pointer">
          <FaLocationArrow />
          <span className="px-[1rem] py-[0.5rem] border-2 rounded-3xl text-[12px] font-[700] hover:bg-black text-white">
            DISCOVER LOCATION
          </span>
        </div>
        <div className="flex items-center ml-[20rem] gap-[1rem] cursor-pointer">
          <BiLeftArrow onClick={prevHandler} />
          <BiRightArrow onClick={nextHandler} />
        </div>
      </div>
    </>
  );
};

export { Footer };
