import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      className="h-screen align-middle items-center justify-center text-center relative overflow-hidden flex flex-col md:flex-row max-w-full
     mx-auto  z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-500 text-[14px] md:text-2xl md:tracking-[20px]">
        Projects
      </h3>

      <div
        className="relative w-full flex mt-12 overflow-y-hidden snap-x md:flex-row flex-col snap-mandatory max-w-screen-2xl
        z-20"
      >
        <div
          className="w-screen snap-center flex flex-col space-y-5 items-center justify-center mt-12 h-screen
            p-20"
        >
          <a
            href="https://l-wenghaishi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              loading="eager"
              src="default.png"
              alt=""
              className="mb-20 md:mb-0 lottery flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-80 md:h-80 xl:w-[700px] xl:h-[350px]"
            />
          </a>
          <div className="h-1/4 w-full ">
            <h4 className="text-2xl text-center mb-4">
              <span className="font-bold ">Lottery dApp</span>
            </h4>

            <p className="text-sm md:text-lg text-center md:text-left">
              Deployed on Polygon's Mumbai testnet. Allows players to purchase
              tickets. Allow contract owner to draw winners. Built with NextJs,
              Typescript & TailwindCSS. (Ensure metamask on Mumbai).
            </p>
          </div>
        </div>

        <div
          className="w-screen snap-center flex flex-col space-y-5 items-center mt-12 justify-center 
            p-20  h-screen"
        >
          <a
            href="https://abnb-clone.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              loading="eager"
              src="default.png"
              alt=""
              className="mb-20 md:mb-0 airbnb flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-80 md:h-80 xl:w-[700px] xl:h-[350px] "
            />
          </a>
          <div className="h-1/4 w-full">
            <h4 className="text-2xl text-center  mb-4">
              <span className="font-bold ">AirBnb Clone</span>
            </h4>

            <p className="text-lg text-center md:text-left">
              An AirBnb clone using Ruby on Rails, PostgreSQL and TailwindCSS.
              Allows user sign ups and renders their respective listings and
              bookings. Deployed on Heroku.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] 
        -skew-y-12"
      />
    </div>
  );
}

export default Projects;
