import Link from 'next/link';
import React from 'react'
import { Cursor } from 'react-simple-typewriter'
import { useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Weng Haishi (Sam)",
            "I-love-web-development.tsx",
            "<ReactJS />",
        ],
        loop: true,
        delaySpeed: 1900,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-40 w-40 mx-auto object-cover' src="sam.jpeg" alt="" 
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Frontend Developer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                   <button className='hero-Button'>About</button>
                </Link>
                <Link href="#projects">
                    <button className='hero-Button'>Projects</button>
                </Link>
                <Link href="#contact">
                    <button className='hero-Button'>Contact</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero