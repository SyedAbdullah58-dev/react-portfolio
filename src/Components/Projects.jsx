import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' ><motion.h1
    whileInView={{opacity:1, y: 10}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className='my-20 text-center text-4xl'>Projects </motion.h1>
    <div>{PROJECTS.map((project,index)=>(<div   className='mb-8 flex flex-wrap lg:justify-center' key={index}>
        <motion.div
            whileInView={{opacity:1, x: 0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
          className="w-full lg:w-2/3 items-center  flex lg:justify-center "><img width={700} height={600} className='rounded mb-6' src={project.image} alt={project.title}></img> </motion.div>
        <motion.div
          whileInView={{opacity:1, x: 0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}

        className="w-full max-w-xl lg:w-3/4"><h6 className='mb-2 font-semibold'>
            {project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            {project.technologies.map((tech,index)=>(
                <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800' key={index}>{tech}</span>))}
            </motion.div>
        </div>))}</div>
    </div>
  )
}

export default Projects