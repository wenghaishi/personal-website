import React from 'react'
import {SiMinutemailer} from 'react-icons/si';
type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-7xl
    justify-evenly mx-auto items-center px-10'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Lets talk!
            </h4>

            <div className='flex items-center space-x-5'>
                <a href='mailto:wenghaishi1@gmail.com?'><SiMinutemailer className='h-10 w-10 text-[#f7a80a] animate-pulse'/></a>
                <a href='mailto:wenghaishi1@gmail.com?'><p className='text-2xl'>wenghaishi1@gmail.com</p></a>
            </div>
        </div>
    </div>
  )
}

export default ContactMe