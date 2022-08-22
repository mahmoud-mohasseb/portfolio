import React from "react";
import img from "../assets/img.png";

function About() {
  return (
    <section id="about" className=" py-32 md:px-14  px-5">
      <div className="container mx-auto">
        <h4 className="text-3xl font-bold text-lead tracking-wider inline-block relative before:absolute before:-right-80 before:top-1/2 md:before:w-72 before:w-0 before:h-[1px] before:bg-sub">
          <span className="text-links text-2xl font-normal mr-3 font-anek">
            01.
          </span>
          About Me
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-sub mb-7">
              Hello! My name is Mahmoud Ahmed and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2018 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p className="text-sub mb-7">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-3 mt-7">
              <li className="text-sub text-sm font-bold">
                <span className="text-sm font-bold text-links">01. </span>
                JavaScript (ES6+)
              </li>
              <li className="text-sub text-sm font-bold">
                <span className="text-sm font-bold text-links">02. </span> React
              </li>
              <li className="text-sub text-sm font-bold">
                <span className="text-sm font-bold text-links">03. </span>
                Node.js
              </li>
              <li className="text-sub text-sm font-bold">
                <span className="text-sm font-bold text-links">04. </span>
                Express.js
              </li>
              <li className="text-sub text-sm font-bold">
                <span className="text-sm font-bold text-links">05. </span>
                WordPress
              </li>
              <li className="text-sub text-sm font-bold">
                <span className="text-sm font-bold text-links">06. </span>
                TailwindcCss
              </li>
            </ul>
          </div>
          <div className="">
            <div className="relative w-1/2 group md:m-0 mx-auto">
              <img src={img} alt="My_Img" className="w-full mx-auto" />

              <div className="absolute bg-links/20 transition-all ease-in-out duration-300 w-full h-full top-0 bottom-0 right-auto left-0 group-hover:w-0 group-hover:right-0 group-hover:left-auto "></div>
              <div className="w-full h-full border-2 rounded-sm transition-all ease-in-out duration-300 border-links absolute top-10 -right-10 -z-10 group-hover:top-5 group-hover:-right-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
