import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function Projects3() {
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
          className="w-screen snap-center flex flex-col space-y-5 items-center mt-12 justify-center 
              p-20  h-screen"
        >
          <a
            href="https://js-4-all.vercel.app/"
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
              className="mb-20 md:mb-0 lc brightness-95 flex-shrink-0 w-56 h-56 rounded-full object-cover
                  md:rounded-lg md:w-80 md:h-80 xl:w-[700px] xl:h-[350px] "
            />
          </a>
          <div className="h-1/4 w-full">
            <h4 className="text-2xl text-center  mb-4">
              <span className="font-bold ">
                Js-4-all
                <SocialIcon
                  url="https://github.com/wenghaishi/JS-4-All"
                  fgColor="gray"
                  bgColor="transparent"
                />
              </span>
            </h4>

            <p className="text-lg text-center md:text-left">
              A platform for learning javascript. Consists of leetcode questions, flashcards and lessons. Utilized NextJs and MongoDB.
            </p>
          </div>
        </div>

        <div
          className="w-screen snap-center flex flex-col space-y-5 items-center justify-center mt-12 h-screen
              p-20"
        >
          <a
            href="https://trello-clone-next-js-plum.vercel.app/"
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
              className="mb-20 md:mb-0 trello brightness-110 flex-shrink-0 w-56 h-56 rounded-full object-cover
                  md:rounded-lg md:w-80 md:h-80 xl:w-[700px] xl:h-[350px]"
            />
          </a>
          <div className="h-1/4 w-full ">
            <h4 className="text-2xl text-center mb-4 ">
              <span className="font-bold ">
                Trello Chatgpt Clone
                <SocialIcon
                  url="https://github.com/wenghaishi/trello-clone-NextJS"
                  fgColor="gray"
                  bgColor="transparent"
                />
              </span>
            </h4>

            <p className="text-sm md:text-lg text-center md:text-left ">
              A Trello clone with drag and drop features as well as OpenAi API integration. Utilized Nextjs and appwrite.
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

export default Projects3;
