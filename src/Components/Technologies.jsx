import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiMsqlServer } from 'react-icons/di'
import { FaReact, FaDatabase, FaJsSquare } from 'react-icons/fa'; // For React, SQL Server, JavaScript
import { SiFirebase, SiFlutter, SiCsharp, SiDotnet } from 'react-icons/si';
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiCsharp className='text-7xl text-purple-400'></SiCsharp>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiDotnet className='text-7xl text-purple-600'></SiDotnet>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaDatabase className='text-7xl text-blue-400'></FaDatabase>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaJsSquare className='text-7xl text-yellow-400'></FaJsSquare>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiFlutter className='text-7xl text-cyan-400'></SiFlutter>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiFirebase className='text-7xl text-yellow-400'></SiFirebase>
            </div>
        </div>
        </div>
  )
}

export default Technologies