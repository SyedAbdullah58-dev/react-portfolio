
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

import { FaUpwork } from 'react-icons/fa6'
import  { SiFiverr } from 'react-icons/si'


const Navbar = () => {
  return (
  <>
   <nav className='mb-20 flex items-center justify-between py-6'>
<div className='flex items-center px-4 py-4 space-x-4'>

<a href='https://www.upwork.com/freelancers/~01b92bf0ea00b68dd5' target="_blank" rel="noopener noreferrer" className="cursor-pointer" ><FaUpwork className='text-green-600 text-3xl'></FaUpwork></a>
<a href='https://www.fiverr.com/syed_abdulla?up_rollout=true' target="_blank" rel="noopener noreferrer" className="cursor-pointer" ><SiFiverr className='text-5xl'></SiFiverr></a>
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