import React, { useState } from "react";

function Experience() {
  const [toggle, settoggle] = useState(1);

  const toggleTab = (e) => {
    settoggle(e);
  };

  return (
    <section id="experience" className="py-32 md:px-14  px-5">
      <div className="container mx-auto md:px-20 px-0">
        <h4 className="text-3xl font-bold text-lead tracking-wider inline-block relative before:absolute before:-right-80 before:top-1/2 md:before:w-72 before:w-0 before:h-[1px] before:bg-sub">
          <span className="text-links text-2xl font-normal mr-3 font-anek">
            02.
          </span>
          Where I’ve Worked
        </h4>

        <div className="flex items-center justify-center mt-10 flex-col md:flex-row md:w-9/12 w-full mx-auto">
          <div className="flex md:flex-col flex-row mr-8  text-left  md:mb-0 mb-8">
            <div
              onClick={() => toggleTab(1)}
              className={`hover:bg-[#112240] py-2 px-7 text-sm transition-all ease-linear duration-300 text-sub border-l-none md:border-b-none border-b-2 md:border-l-2 cursor-pointer ${
                toggle === 1 ? "border-links" : "border-main"
              }`}
            >
              Upstatement
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={`hover:bg-[#112240] py-2 px-7 text-sm transition-all ease-linear duration-300 text-sub border-b-2 md:border-l-2 cursor-pointer ${
                toggle === 2 ? "border-links" : "border-main"
              }`}
            >
              Scout
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={`hover:bg-[#112240] py-2 px-7 text-sm transition-all ease-linear duration-300 text-sub border-b-2 md:border-l-2 cursor-pointer ${
                toggle === 3 ? "border-links" : "border-main"
              }`}
            >
              Apple
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={`hover:bg-[#112240] py-2 px-7 text-sm transition-all ease-linear duration-300 text-sub border-b-2 md:border-l-2 cursor-pointer ${
                toggle === 4 ? "border-links" : "border-main"
              }`}
            >
              Starry
            </div>
          </div>
          <div className={` px-2 ${toggle === 1 ? "block" : "hidden"}`}>
            <h2 className="text-2xl text-lead font-semibold mb-1">
              Engineer <span className="text-links">WpEqual</span>
            </h2>
            <p className="text-sub text-sm font-semibold mb-4">
              May 2018 - Present
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </div>
          <div className={` px-2 ${toggle === 2 ? "block" : "hidden"}`}>
            <h2 className="text-2xl text-lead font-semibold mb-1">
              Studio Developer <span className="text-links">WpEqual</span>
            </h2>
            <p className="text-sub text-sm font-semibold mb-4">
              May 2018 - Present
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </div>
          <div className={` px-2 ${toggle === 3 ? "block" : "hidden"}`}>
            <h2 className="text-2xl text-lead font-semibold mb-1">
              Creative Technologist Co-op
              <span className="text-links">WpEqual</span>
            </h2>
            <p className="text-sub text-sm font-semibold mb-4">
              May 2018 - Present
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </div>
          <div className={` px-2 ${toggle === 4 ? "block" : "hidden"}`}>
            <h2 className="text-2xl text-lead font-semibold mb-1">
              UI Engineer Co-op <span className="text-links">WpEqual</span>
            </h2>
            <p className="text-sub text-sm font-semibold mb-4">
              May 2018 - Present
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p className='text-sub text-sm font-medium mb-4 relative before:content-["▹"] before:absolute before:-top-1 before:-left-6 before:text-links before:text-xl'>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
