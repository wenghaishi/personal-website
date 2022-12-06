import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial ={{
        opacity: 0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration: 1.5
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
    px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x: -200,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
            duration: 1.2,
            }}
            viewport={{once: true}}
            src="sam1.jpeg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-65 md:h-90 xl:w-[400px] xl:h-[500px]"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background:
            </h4>
            <p className='text-xl'>
                I am a frontend & blockchain developer based in Singapore. I love exploring and learning 
                new technologies. In my free time, I enjoy weightlifting.
                
            </p>
        </div>
    </motion.div>
  )
}

export default About