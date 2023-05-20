import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Projects2 from "../components/Projects2";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y nap-mandatory
    overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
    >
      <Head>
        <title>Sam&apos;s website</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experiences */}
      {/* Skills */}
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects2 />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
