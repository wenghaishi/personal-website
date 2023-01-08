import React from 'react'
import { motion } from 'framer-motion';


type Props = {}

function Projects({}: Props) {

  return (
    <div className='h-screen align-middle items-center justify-center text-center relative overflow-hidden flex flex-col md:flex-row max-w-full
     mx-auto  z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-y-hidden snap-x snap-mandatory
        z-20'>
            <div className='w-screen snap-center flex flex-col space-y-5 items-center justify-center 
            p-20  h-screen'>
              <a href="https://expense-tracker-lemon.vercel.app/" target='_blank' rel="noreferrer"><motion.img 
                initial={{
                  y:-300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true}}
                src="expenseTracker.png" alt="" className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-80 md:h-80 xl:w-[700px] xl:h-[390px] border-2 '/></a>
            <div>
              <h4 className='text-2xl text-center mb-1.5 '>
                <span className='font-bold '>Expense tracker</span>
              </h4>

              <p className='text-lg text-center md:text-left ' >
                An expense tracker app that allows users to add their daily expenses. Has analytics and
                chart feature. Built with the ReactJS library.
              </p>
            </div>
          </div>

          <div className='w-screen snap-center flex flex-col space-y-5 items-center justify-center 
            p-20  h-screen'>
              <a href="https://robo-punksnft.netlify.app/" target='_blank' rel="noreferrer"><motion.img 
                initial={{
                  y:-300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true}}
                src="robo.png" alt="" className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-80 md:h-80 xl:w-[700px] xl:h-[390px] border-2 '/></a>
            <div>
              <h4 className='text-2xl text-center mb-1.5'>
                <span className='font-bold '>NFT minting site</span>
              </h4>

              <p className='text-lg text-center md:text-left ' >
                A NFT minting site on the Rinkeby testnet. Connects to Metamask. Only allow Max 3 mint per transaction. Built with ReactJS library.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] 
        -skew-y-12'/>
        
    </div>
  );
}

export default Projects