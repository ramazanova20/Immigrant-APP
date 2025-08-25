import React from 'react'
import { Link } from 'react-router'
import { FaQuestion } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
function Help() {
  return (
    <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-between gap-7">
      <h1 className='permanent-marker-regular text-6xl text-center'>Help</h1>
      <ul className="flex flex-col gap-8 text-xl">
        <li className='hover:text-yellow-400 border-b-2  border-gray-200 hover:border-yellow-400 flex flex-row items-center gap-2 justify-start'>
          <FaQuestion className=' text-2xl mb-4'/><Link to={`/fag`} onClick={() => setIsOpen(false)} className='mb-4'>FAG</Link>
        </li>
        <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400 flex flex-row items-center gap-2 justify-start'>
          <GrResources className=' text-2xl mb-4'/><Link to={`/resources`} onClick={() => setIsOpen(false)} className='mb-4'>Resources</Link>
        </li>
        <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400 flex flex-row items-center gap-2 justify-start'>
          <FaMapLocationDot className=' text-2xl mb-4'/><Link to={`/mapLocations`} onClick={() => setIsOpen(false)} className='mb-4'>MapLocations</Link>
        </li>
        <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400 flex flex-row items-center gap-2 justify-start'>
          <MdOutlineWifiCalling3 className=' text-2xl mb-4'/><Link to={`/emergency`} onClick={() => setIsOpen(false)} className='mb-4'>Emergency</Link>
        </li>
      </ul>
    </div>
  )
}

export default Help