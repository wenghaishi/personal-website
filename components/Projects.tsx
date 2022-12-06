import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  let i;

  return (
    <div className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20'>
          {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justofy-center 
            p-20 md:p-44 h-screen'>
              <img src="sam.jpeg" alt="" />
            <div>
              <h4>
                <span>Case study {i + 1} of {projects.length}:</span>
              </h4>
            </div>
          </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] 
        -skew-y-12'/>
        
    </div>
  );
}

export default Projects