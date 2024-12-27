'use client'

import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets"
// import Head from "next/head"

const About = () => {
  return (
        // <div className="min-h-screen px-96 flex flex-col items-center justify-center">
        //     <Heading text={"About me"} />
        //     <div className="w-full flex items-center justify-between md:justify-center">
                
    <div id="about" className="flex flex-col min-h-screen md:min-w-full justify-center px-40 md:px-0  bg-[#FAFAFA] dark:bg-zinc-800">
        <div className="flex-shrink-0 ml-0 mt-0">
            <Heading text={'About me'}/>
        </div>    

        <div className="flex justify-center md:w-screen">

                <Image src={'/about-me.png'} alt="About Me" width={400} height={400} className="w-[300px] lg:[200px] md:hidden"/>
                <div className="relative md:min-w-screen md:max-w-fit  max-w-[800px] rounded-xl bg-zinc-100 dark:bg-zinc-500 p-5 text-justify">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 dark:text-zinc-500 md:hidden">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-lg md:text-sm  font-light dark:text-slate-50 text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
                        {aboutText}
                    </p>
                    <a href="/Madan_Piske.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 bg-red-400 rounded-full border border-gray-300 px-3 py-2 font-light text-white hover:bg-red-600 transitions-colors">
                        <span>Download CV</span>
                        <span className="text-xl " >{downloadIcon}</span>
                    </a>
                </div>
        </div>

        <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
            {aboutData.map((item, i) => (
                <Achievements key={i} title={item.title} amount={item.amount}>
                    {item.icon}
                </Achievements>
                
            ))
            }
        </div> 
    
    </div>
        )
    }


export default About


