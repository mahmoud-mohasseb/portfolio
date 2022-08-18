import React, { useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [nav, setNav] = useState(false);

  const scrollNav = () => {
    if (window.scrollY >= 40) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", scrollNav);

  return (
    <nav
      className={`py-8 pointer-events-auto z-30 fixed w-full top-0 transition-all ease-in-out duration-300 ${
        sticky ? "bg-sticky shadow-stickyBox py-5" : " bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <span className="border border-links rounded-sm text-links text-xl py-2 px-3">
              M<span className="text-white text-dots">.</span>
            </span>

            <div
              className="text-links text-5xl md:hidden block z-50 p-1 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <ion-icon
                name={nav ? "close-outline" : "menu-outline"}
              ></ion-icon>
            </div>
          </div>

          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-8 md:static fixed right-0 top-0 md:bg-transparent bg-siteNav md:h-auto h-screen md:w-auto w-1/2 md:z-auto z-40 transition-all ease-in-out duration-300 md:shadow-none shadow-boxSide md:p-0 p-10 ${
              nav ? "translate-x-0" : "md:translate-x-0 translate-x-sideTrans"
            }`}
          >
            <li>
              <a
                href="#about"
                className="text-lead text-sm font-anek transition-all ease-in-out duration-300 hover:text-links"
                onClick={() => setNav(false)}
              >
                <span className="text-links text-fontBtn">01.</span> About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-lead text-sm font-anek transition-all ease-in-out duration-300 hover:text-links"
                onClick={() => setNav(false)}
              >
                <span className="text-links text-fontBtn">02.</span> Experience
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="text-lead text-sm font-anek transition-all ease-in-out duration-300 hover:text-links"
                onClick={() => setNav(false)}
              >
                <span className="text-links text-fontBtn">03.</span> Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lead text-sm font-anek transition-all ease-in-out duration-300 hover:text-links"
                onClick={() => setNav(false)}
              >
                <span className="text-links text-fontBtn">04.</span> Contact
              </a>
            </li>
            <li>
              <button className="border border-links py-2 px-5 text-fontBtn text-links rounded-borderBtn hover:bg-links/10">
                Resum
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
