import React from "react";

function Home() {
  return (
    <header className=" pt-40">
      <div className="container mx-auto">
        <div className="md:px-28 px-5 md:w-[90%] w-full">
          <p className=" text-links font-anek tracking-widest">
            Hi, my name is
          </p>
          <h2 className="text-7xl font-bold font-sans text-lead mt-5 mb-5">
            Mahmoud Ahmed.
          </h2>
          <h2 className="text-7xl font-bold font-sans text-sub mt-5 mb-5">
            I build things for the web.
          </h2>
          <p className="text-sub mt-5 mb-5">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upwork.
          </p>
          <a
            href="mailto:zehadhasanlive@gmail.com"
            className=" border border-links py-3 px-9 text-links rounded-borderBtn transition-all ease-in-out duration-300 hover:bg-links/10 inline-block mt-6"
          >
            Get In Touch!
          </a>
        </div>
      </div>
    </header>
  );
}

export default Home;
