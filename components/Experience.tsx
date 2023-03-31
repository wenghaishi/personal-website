import React from 'react'

function Experience() {
  return (
    <div
      className="flex flex-col relative h-screen mt-12 text-center md:text-left md:flex-row max-w-7xl 
      px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[14px] text-gray-500 text-[14px] md:text-2xl md:tracking-[20px]'>
            Experiences
        </h3>
        <div className='flex flex-col mt-24 gap-8'>
          <div className='flex-row flex gap-8'>
            <h2 className="hover:text-[#f7a80a] font-bold text-2xl text-[#de970a] ">Education</h2>
            <p>Le wagon web development bootcamp</p>
          </div>
          <div className='flex-row flex gap-8'>
            <h2 className="hover:text-[#f7a80a] font-bold text-2xl text-[#de970a] hidden ">Education</h2>
            <p>Singapore Management University</p>
          </div>

          <h2 className="hover:text-[#f7a80a] font-bold text-2xl text-[#de970a] ">Education</h2>
          <p className="ml-2/4">Singapore management university</p>
        </div>
        

        <h2 className="">Education</h2>
        <p>Le wagon web development bootcamp</p>
    </div>
  )
}

export default Experience