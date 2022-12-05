import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y nap-mandatory
    overflow-scroll z-0'>
      <Head>
        <title>
          Sam&apos;s website
        </title>
      </Head>

      <Header/>

      { /* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      { /* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      { /* Experiences */}
      { /* Skills */}
      { /* Projects */}
      <section id="section" className='snap-start'>
        <Projects />
      </section>
      { /* Contact me */}
    </div>
  )
}
