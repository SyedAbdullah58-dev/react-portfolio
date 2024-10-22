import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'
const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' >
        <motion.h1   whileInView={{opacity:1, x: 0}}
               initial={{opacity:0,x:100}}
               transition={{duration:0.5}} className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <p className='my-2 text-2xl'>{CONTACT.phoneNo}</p>
           <a className='border-b text-2xl' href='#'> {CONTACT.email}</a>
            </div>
        </div>
  )
}

export default Contacts