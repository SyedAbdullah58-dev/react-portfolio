import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

import { TbBackground } from 'react-icons/tb'
const Navbar = () => {
  return (
  <>
   <nav className='mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
  <img className='mx-2 w-10'
  src={logo} alt='logo'></img>
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
<a href='https://www.linkedin.com/in/syed-abdullah-software-engineer/' target="_blank" rel="noopener noreferrer" className="cursor-pointer" ><FaLinkedin></FaLinkedin></a>
<a href='https://github.com/SyedAbdullah58-dev' target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaGithub></FaGithub></a>
<a href='https://x.com/SyedAbd96331214' target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaSquareTwitter ></FaSquareTwitter></a>
<a href='https://www.instagram.com/syed_abdullah_sh/' target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaInstagram></FaInstagram></a>

</div>
 </nav>
  </>
  )
}

export default Navbar