'use client'
import { useEffect, useRef, useState } from 'react'
import Heading from './sub/Heading'
import { projectsButton, projectsData } from '@/assets'
import Project from './sub/Project'
import { motion, animate } from 'framer-motion'
const Projects = () => {
  const [tech, setTech] = useState('All')
  const [index, setIndex] = useState(0)
  const prevIndex = useRef(0)
  const buttonsRef = useRef([])

  const handleClick = () => {
    // provide user feedback
    animate(buttonsRef.current[prevIndex.current], {opacity: 0.5, scale: 1})
    animate(buttonsRef.current[index], {opacity: 1, scale: 1.2})
  }

      useEffect(() => {
        handleClick()
        prevIndex.current = index
      }, [index])

  return (
    <div id='projects' className='min-h-screen py-20 px-40 dark:bg-zinc-800 bg-[#FAFAFA]'>
        <Heading text={'Projects'} />

          <div className='flex flex-wrap items-center justify-between gap-4 py-10'>
            {projectsButton.map((text, i) => (
              <motion.button className='border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400 dark:text-slate-100' 
              key={i}
              initial = {{ opacity: i === 0 ? 1 : 0.5,
              scale: i === 0 ? 1.2 : 1            
              }}
              ref={(el) => buttonsRef.current.push(el)}
              onClick={() => {
                setTech(text)
                setIndex(i)
              }}
              >{text}</motion.button>

            ))}
            
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>

            {projectsData.filter((project) => {
              return project.tech.some((item) => 
                (tech === 'All' ? true : item === tech ))
            }).map((data, i) => (
              <motion.div key={`id - ${i}`} layout>
                <Project data= {data} index={i} />
              </motion.div>
            ))

            }
        </div>
    </div>
  )
}

export default Projects

             // initial={{opacity: i === 0 ? 1 : 0,
              // initial={{opacity: 1,