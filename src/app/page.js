"use client"
// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Framer from "@/components/Framer";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import { useState, useRef, useEffect } from "react";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";

export default function Home() {
  const [id, setId] = useState(0)
  const compRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if (intersecting) {
            setId(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )
    const compsArr = Array.from(compRef.current.children)
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })
  }, [])

  return (
    <>
    <Load />

    <Toggle>

    <Navbar id={id}/>
    <div ref={compRef}>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Questions />
      <Framer />
    </div>
    </Toggle>
    {/* </Load> */}
    </>
  )
}
