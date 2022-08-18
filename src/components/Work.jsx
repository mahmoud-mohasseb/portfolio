import React from "react";
import img2 from "../assets/2.png";
import img4 from "../assets/4.png";
import img22 from "../assets/22.png";

function Work() {
  return (
    <section id="work" className=" py-32 md:px-14  px-5">
      <div className="container mx-auto">
        <h4 className="text-3xl font-bold text-lead tracking-wider inline-block relative before:absolute before:-right-80 before:top-1/2 md:before:w-72 before:w-0 before:h-[1px] before:bg-sub">
          <span className="text-links text-2xl font-normal mr-3 font-anek">
            03.
          </span>
          Some Things I’ve Built
        </h4>

        <div className="flex items-center md:flex-row flex-col justify-center mt-12 md:px-24 px-5">
          <img src={img2} alt="img_2" className="md:w-1/2 md:mb-0 mb-10" />

          <div className="text-right md:-ml-10 m-0 z-10">
            <p className="text-links text-sm font-medium mb-3">
              Featured Project
            </p>
            <h3 className="text-lead text-3xl font-bold mb-5">Groxi App</h3>
            <p className="bg-siteNav shadow-xl px-6 py-4 rounded-md text-sub text-sm font-medium">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center mt-16 md:px-24 px-5">
          <div className="text-left md:-mr-10 m-0 z-10">
            <p className="text-links text-sm font-medium mb-3">
              Featured Project
            </p>
            <h3 className="text-lead text-3xl font-bold mb-5">Shapro App</h3>
            <p className="bg-siteNav shadow-xl px-6 py-4 rounded-md text-sub text-sm font-medium">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
          <img src={img4} alt="img_2" className="md:w-1/2 md:mt-0 mt-10" />
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center mt-16 md:px-24 px-5">
          <img src={img22} alt="img_2" className="md:w-1/2 md:mb-0 mb-10" />

          <div className="text-right md:-ml-10 m-0 z-10">
            <p className="text-links text-sm font-medium mb-3">
              Featured Project
            </p>
            <h3 className="text-lead text-3xl font-bold mb-5">Coder App</h3>
            <p className="bg-siteNav shadow-xl px-6 py-4 rounded-md text-sub text-sm font-medium">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
