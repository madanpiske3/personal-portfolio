"use client"
import Image from "next/image"
// import InstagramLineIcon from "remixicon-react/InstagramLineIcon"

import { heroIcons } from '@/assets';
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innneWidth: 0, innerHeight: 0 }) 
  // tracking window size 
  // dynamic updates
  const [mouseMove, setMouseMove] = useState(false)

  const [buttonHover, setButtonHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)

    console.log(clientX, clientY, x, y)
  }

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
    setMouseMove(true)

    console.warn(innerWidth, innerHeight)
  }

  const {innerWidth, innerHeight} = windowOffset

  const xSpring = useSpring(x, { stiffness: 100, damping: 5 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 5 })

  const rotateY = useTransform(xSpring, [0, innerWidth],[-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight],[10, -50])



  return (
      

      <div 
        id="home"
        className="h-screen grid place-items-center bg-[#FAFAFA] dark:bg-zinc-800" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
            <div>
              <motion.div initial={{ opacity:0, y: -100 }} animate={{ opacity: 100, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
                <motion.div className="flex items-center justify-center" 
                  style={{
                    rotateX: mouseMove ? rotateX : 0,
                    rotateY: mouseMove ? rotateY : 0,
                    transition: '0.1s', 
                  }}
                 >
                  <Image src={'/person.png'} alt='Person Image' width={200} height={200} 
                    priority={true} className="h-auto w-[150px]"
                  />
                  <motion.span className="absolute text-3xl font-semibold text-white"
                    initial={{ scale: 0 }} 
                    animate={{
                      opacity: buttonHover ? 0 : 1,
                      scale: buttonHover ? 2 : 0,
                      y: buttonHover ? -40 : 0,
                    }}
                    transition={{ opacity: { delay: 0.4 } }}
                  >HI !</motion.span>
                </motion.div>
                
                <h1 className="text-center text-3xl font-bold tracking-wider dark:text-orange-300 text-gray-500 inline-flex items-center sm:text-base">
                  My name is Madan Piske
                    <motion.div
                      className="w-[3px] h-7 bg-gray-600 dark:bg-slate-100 ml-1 sm:h-4 sm:w-[2px]"
                      animate={{
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                </h1>
                <p className="text-lg tracking-wider text-gray-700 dark:text-amber-100 sm:text-sm">I love to Code 😎</p>
                {/* 💪🏻😊🤗 */}
              </motion.div>
                <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{delay: 0.5}} className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-500">
                {heroIcons.map((icon, i) => (
                    <a href={(i === 4) ? "https://github.com/madanpiske3" :
                    (i === 2) ? "#" :
                        (i === 1) ? "https://leetcode.com/u/madanpiske1729/" : "https://leetcode.com/u/madanpiske1729/"} key={i} className="hover:bg-red-400 rounded-full hover:text-white transition-colors">
                      {icon}
                    </a>

                  ))}
                </motion.div>
                    {/* <div className="flex justify-center" > */}

                <motion.a initial={{opacity: 0, y: 200}} animate={{opacity: 1, y: 0}} transition={{delay: 0.6}}  href="#" className="mt-7 block w-max rounded-lg dark:text-slate-100 bg-red-400 px-3 py-1 hover:bg-red-500 tracking-wider transition-colors mx-auto"
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                >
                  Talk to me</motion.a>
                    {/* </div> */}
              </div>

      </div>
  )
}

export default Hero

// i === !4 || 2 ? (i === 2 ? '#' : 'https://leetcode.com/u/madanpiske1729/') :"https://github.com/madanpiske3"}
{/* <span className="text-center text-3xl font-bold tracking-wider text-gray-500 inline">My name is Madan Piske
                <motion.div
                  className="w-0.5 h-6 bg-black ml-0.5"
                  animate={{
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                </span> */}

                // (
                //   if (i === 0 || i === 1 || i === 3)
                //   {
                //     <a href="https://github.com/madanpiske3" key={i} className="hover:bg-red-400 rounded-full hover:text-white transition-colors">
                //         {icon}
                //       </a> 
                //   }
                //   else if (i === 2) {
                //     <a href="#" key={i} className="hover:bg-red-400 rounded-full hover:text-white transition-colors">
                //         {icon}
                //       </a>
                //   }
                //   else {
                //     <a href="https://github.com/madanpiske3" key={i} className="hover:bg-red-400 rounded-full hover:text-white transition-colors">
                //         {icon}
                //       </a>
                //   }
                // )}
                // {heroIcons.map((icon, i) =>{
                //   <a href="https://github.com/madanpiske3" key={i} className="hover:bg-red-400 rounded-full hover:text-white transition-colors">
                //         {icon}
                //       </a>                     
                //     // <a href='#' key={i} className="hover:bg-red-400 rounded-full hover:text-white transition-colors">
                //     //   {icon}
                //     // </a>
                //   })}


                    
















