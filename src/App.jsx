import { useState, useEffect } from "react";
import "./App.css";
import shape from "./assets/shape.png";
import hamburger from "./assets/hamburger.png";
import logo from "./assets/logo.png";
import { InfiniteScroll } from "./components/InfiniteScroll";
import TypeWriter from "./components/TypeWriter";

function App() {
  const [count, setCount] = useState(0);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // screen wrapper
    <div className=" border-0 border-amber-500">
      {/* Header */}
      {/* bg-gradient-to-t from-[#010215] to-[#2B4874]  implement when scroll passed homepage */}

      <header
        className={` fixed top-0 left-0 right-0 z-50 px-10 pt-8 pb-5 flex justify-between items-center transition-colors duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-sm shadow-xs shadow-black"
            : "bg-transparent"
        }`}
      >
        <img className="brightness-60 w-20 " src={logo} alt="Logo" />

        <img
          className="brightness-60 w-8 sm:hidden"
          src={hamburger}
          alt="Hamburger-menu"
        />
        <nav className="hidden sm:block">
          <ul className="flex gap-6">
            <li>
              <a
                href="#"
                className="text-white brightness-70 text-xl underline-animation hover:brightness-80"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white brightness-70 text-xl underline-animation hover:brightness-80"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white brightness-70 text-xl underline-animation hover:brightness-80"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* homePage */}
      <section
        className="min-h-screen px-14 pt-[120px]  flex flex-col justify-center sm:flex-row sm:items-center sm:justify-between  sm:gap-[4vw]  gap-[9vh] "
        style={{
          background:
            "linear-gradient(135deg, rgba(1,2,21,1) 40%, rgba(43,72,116,1) 100%)",
        }}
      >
        {/* titles + button */}
        <div className=" border-amber-400 border-0 sm:gap-5 sm:w-[60%] flex flex-col justify-center">
          <div>
            <div className="text-start text-[clamp(2.3rem,4vw,5rem)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 from-0% to-50% to-[#408CFF]">
              I'm Mohamed
            </div>
            <TypeWriter classname=" text-[clamp(1.5rem,2.7vw,4vw)] font-normal text-gray-100/85 " />
          </div>

          <div className="flex flex-col gap-2 mt-[4vh]">
            <p className=" text-[clamp(1rem,1.5vw,3rem)] font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#408CFF]  to-gray-400 ">
              I love bringing designs to life with code that looks good and
              feels even better.
            </p>

            <button className="sm:w-fit font-normal px-6 py-1 rounded-lg bg-gradient-to-l from-[#0564FD] to-[#000897]">
              <span className="text-[clamp(1rem,1.5vw,4rem)] text-gray-200">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* shape + marquee */}
        <div className=" sm:w-[40%] flex flex-col justify-between items-center  gap-[4vh] ">
          <div className="relative  flex justify-center ">
            <img
              src={shape}
              alt=""
              srcset=""
              className="min-w-[190px] h-auto w-[25vw] translate-x-[2vw]  object-contain"
            />
          </div>
          <InfiniteScroll className="border-0 border-amber-500 marquee-wrapper brightness-80  hover:brightness-100 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
}

export default App;
