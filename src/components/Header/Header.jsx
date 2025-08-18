import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router';
import { Dropdown, DropdownItem } from "flowbite-react";
import FlagIcon from './FlagIcon';
import { RiPoliceBadgeLine } from "react-icons/ri";
import { FaBuildingFlag } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { TbBuildingAirport } from "react-icons/tb";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className='bg-[#EA613D]'>
        <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-row justify-between">
            <div className='headerOne flex flex-row justify-start text-white gap-4 my-3 text-lg'>
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoIosCloseCircleOutline />:<GiHamburgerMenu />}
                </button>
                <div className='hidden md:flex flex-row'>
                  <ul className="flex flex-row gap-8 text-xl">
                    <li className='hover:text-yellow-400'><Link to="/" onClick={() => {scrollToTop(); setIsOpen(false);}}>Home</Link></li>
                    <li className='hover:text-yellow-400'><Link to={`/firststeps`} onClick={() => setIsOpen(false)}>First Steps</Link></li>
                    <li className='hover:text-yellow-400'><Link to={`/survey`} onClick={() => setIsOpen(false)}>Survey</Link></li>
                    <li className='hover:text-yellow-400'><Link to={`/knowledgebase`} onClick={() => setIsOpen(false)}>Knowledge Base</Link></li>
                    <li className='hover:text-yellow-400'><Link to={`/help`} onClick={() => setIsOpen(false)}>Help</Link></li>
                  </ul>
                </div>
                <Dropdown className='border-0 shadow-xl/30 shadow-amber-800 shadow-lg rounded-md min-w-[150px] !top-4 text-[#EA613D]'
                  label={<FaPhoneAlt className="text-lg transition-transform duration-300 hover:scale-110" />}
                  dismissOnClick={false}
                  inline
                  >
                  <DropdownItem className='gap-2 border-b-2 border-gray-200'><RiPoliceBadgeLine />Police</DropdownItem>
                  <DropdownItem className='gap-2 border-b-2 border-gray-200'><FaBuildingFlag />City Hall</DropdownItem>
                  <DropdownItem className='gap-2 border-b-2 border-gray-200'><SiAdguard />City Guard</DropdownItem>
                  <DropdownItem className='gap-2'><TbBuildingAirport />Immigration Center</DropdownItem>
                </Dropdown>
            </div>
            
            
            <div className='headerTwo flex flex-row justify-start text-white gap-4 my-4 text-lg'>
               
                <FlagIcon/>
                <FaRegUser className='text-xl transition-transform duration-300 hover:scale-110' />
            </div>
            
        <div
          className={`md:hidden inset-0 bg-black/80 text-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className="absolute top-6 left-3 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <IoIosCloseCircleOutline />
          </button>
          <ul className="flex flex-col gap-8 text-xl text-center">
            <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400'>
              <Link to="/" onClick={() => {scrollToTop(); setIsOpen(false);}}>Home</Link>
            </li>
            <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400'>
              <Link to={`/firststeps`} onClick={() => setIsOpen(false)}>First Steps</Link>
            </li>
            <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400'>
              <Link to={`/survey`} onClick={() => setIsOpen(false)}>Survey</Link>
            </li>
            <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400'>
              <Link to={`/knowledgebase`} onClick={() => setIsOpen(false)}>Knowledge Base</Link>
            </li>
            <li className='hover:text-yellow-400 border-b-2 border-gray-200 hover:border-yellow-400'>
              <Link to={`/help`} onClick={() => setIsOpen(false)}>Help</Link>
            </li>
          </ul>
        </div>

        </div>
        </div>
   
  )
}

export default Header
