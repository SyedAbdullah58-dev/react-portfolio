import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiMsqlServer } from 'react-icons/di'
import { FaReact, FaDatabase, FaJsSquare } from 'react-icons/fa'; // For React, SQL Server, JavaScript
import { SiFirebase, SiFlutter, SiCsharp, SiDotnet } from 'react-icons/si';
import {animate, motion} from "framer-motion"
const Technologies = () => {
const iconVariants=(duration)=>({
initial:{y:-10},
animate:{
  y:[10,-10],
  transition:{
    duration: duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse",
  },
},
})

  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
          whileInView={{opacity:1, y: 10}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.7}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}

        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
         variants={iconVariants(2)}
initial="initial"
animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiCsharp className='text-7xl text-purple-400'></SiCsharp>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiDotnet className='text-7xl text-purple-600'></SiDotnet>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaDatabase className='text-7xl text-blue-400'></FaDatabase>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaJsSquare className='text-7xl text-yellow-400'></FaJsSquare>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiFlutter className='text-7xl text-cyan-400'></SiFlutter>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiFirebase className='text-7xl text-yellow-400'></SiFirebase>
            </motion.div>
        </motion.div>
        </div>
  )
}

export default Technologies