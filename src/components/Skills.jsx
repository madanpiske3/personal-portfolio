'use client'
import React from 'react'
import Heading from './sub/Heading'
import { delay, motion } from 'framer-motion'
import { skillsData } from '@/assets'
import Image from 'next/image'

const Skills = () => {
    // const variants = () => {
    //     visible: (i) => ({
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             delay: 0.3 + i * 0.07,
    //         },
    //     }),        
    //     hidden: {
    //         opacity: 0,
    //         y: 30,
    //     },
    // }
    const variants = () => ({
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3 + i * 0.07,
          },
        }),
        hidden: {
          opacity: 0,
          y: 30,
        },
      });

  return (
    // <div className='min-h-screen flex flex-col items-center justify-center gap-y-20'>
    <div id='skills' className='flex flex-col min-h-screen justify-center px-40 bg-[#FAFAFA] dark:bg-zinc-800'>
        <Heading text={'Skills'} />

        <div className='w-full flex justify-around flex-wrap gap-x-8 gap-y-10 lg:gap-y-6'>
            {skillsData.map((item, i) => (
                <motion.div 
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    whileHover={{ scale: 1.3 }}
                    viewport={{ margin:'50px', once:true }}
                    key={i}
                    className='flex items-center justify-center dark:bg-zinc-400 bg-zinc-200 rounded-xl px-5 py-2 gap-x-3 border-yellow-400 lg:px-2 w-40'
                 >
                     <Image 
                        src={item.icon}
                        width={100}
                        height={100}
                        alt='h'
                        className='h-auto w-[40px]'
                     />

                     <p className='text-sm dark:text-slate-100 text-gray-600'>{item.name}</p>
                </motion.div>                
            ))}
        </div>

        {/* <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6'>
            {skillsData.map((item, i) => (
                <motion.div 
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    whileHover={{ scale: 1.3 }}
                    viewport={{ margin:'50px', once:true }}
                    key={i}
                    className='flex items-center justify-center dark:bg-zinc-400 bg-zinc-200 rounded-xl px-5 py-2 gap-x-3 border-yellow-400 lg:px-2'
                 >
                     <Image 
                        src={item.icon}
                        width={100}
                        height={100}
                        alt='h'
                        className='h-auto w-[40px]'
                     />

                     <p className='text-sm dark:text-slate-100 text-gray-600'>{item.name}</p>
                </motion.div>                
            ))}
        </div> */}
    </div>
  )
}

export default Skills
