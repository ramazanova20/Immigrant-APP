import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import '../../index.css';
import { RiUserCommunityFill } from "react-icons/ri";
import { FaBuildingColumns } from "react-icons/fa6";
import { VscInfo } from "react-icons/vsc";
import { MdOutlineWork } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

function KnowledgeBase() {
  return (
    <div>
      <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-between gap-7">
        <div>
          <h1 className='text-center permanent-marker-regular text-xl'
            >Knowledge Base</h1>
        <div className='mt-6 mb-14'>
            <Accordion collapseAll className='border-0 shadow-xl/30 shadow-amber-800'>
              <div className='hover-underline p-4 font-semibold text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
                <div className='flex flex-row items-center gap-2 justify-start'>
                  <VscInfo className=' text-2xl' /> 
                  First steps
                </div>
              </div>
          <AccordionPanel>
            <AccordionTitle className='hover:underline text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 p-4 text-xl cursor-pointer border-b-2 border-gray-200'> 
              <div className='flex flex-row items-center gap-2 justify-start'> 
                <RiUserCommunityFill className='text-2xl'/>Communication 
              </div> 
            </AccordionTitle>
            <AccordionContent>
              <Accordion collapseAll className='border-0 shadow-xl/30 shadow-amber-500'>
                <AccordionPanel>
                  <AccordionTitle className='hover:underline p-4 text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
                     a. Public transport
                  </AccordionTitle>
                  <AccordionContent className='p-4'>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">1. City bike</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">2. PKM timetable</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">3. KM timetable</p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel>
                  <AccordionTitle className='hover:underline p-4 text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
                    b. Personal transport
                  </AccordionTitle>
                  <AccordionContent className='p-4'>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">1. Driving license</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">2. Road license</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">3. Vehicle registration</p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>

            </AccordionContent>
          </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle className='hover:underline p-4 text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
              <div className='flex flex-row items-center gap-2 justify-start'> 
                <FaBuildingColumns className='text-2xl'/>Residence
              </div> 
              </AccordionTitle>
        <AccordionContent className='p-4'>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            a. PESEL number
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            b. Residence card
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            c. Citizenship
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            d. Visa
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            e. Polish telephone number
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            f. Insurance
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            g. Finance (bank account)
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            h. Security
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
            <AccordionTitle className='hover:underline p-4 text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
              <div className='flex flex-row items-center gap-2 justify-start'> 
                <MdOutlineWork className='text-2xl'/>Job
              </div> 
            </AccordionTitle>
            <AccordionContent className='p-4'>
              <Accordion collapseAll className='border-0 shadow-xl/30 shadow-amber-500'>
                <AccordionPanel>
                  <AccordionTitle className='hover:underline p-4 text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
                    a. Looking for a job
                  </AccordionTitle>
                  <AccordionContent className='p-4'>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">1. Work permit</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">2. Employment office</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">3. Central employment database</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">4. KRS</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">5. CEIDG</p>
                  </AccordionContent>
                </AccordionPanel>

                
                  <div className='hover:underline p-4 font-semibold text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer'>b. Own business</div>
                
              </Accordion>

            </AccordionContent>
          </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle className='hover:underline p-4 text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
          <div className='flex flex-row items-center gap-2 justify-start'> 
            <MdApartment className='text-2xl'/>Apartment
          </div> 
        </AccordionTitle>
        <AccordionContent className='p-4'>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            a. Apartment purchase
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            b. Rental
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            c. Social housing
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            d. Collective housing
          </p>
        </AccordionContent>
      </AccordionPanel>    

      <AccordionPanel>
            <AccordionTitle className='hover:underline p-4 text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
              <div className='flex flex-row items-center gap-2 justify-start'> 
                <FaUserGraduate className='text-2xl'/>Education
              </div>
            </AccordionTitle>
            <AccordionContent className='p-4'>
              
              <Accordion collapseAll className='border-0 shadow-xl/30 shadow-amber-500'>
                <AccordionPanel>
                  <AccordionTitle className='hover-underline p-4 text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
                    a. Children
                  </AccordionTitle>
                  <AccordionContent className='p-4'>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">1. Nursery</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">2. Kindergarten</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">3. Primary school</p>
                    <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">4. Secondary school</p>
                  </AccordionContent>
                </AccordionPanel>

                  <div className='hover-underline p-4 font-semibold text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer'>
                    b. Adults
                  </div>
                
              </Accordion>

            </AccordionContent>
          </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle className='hover:underline p-4 text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
          <div className='flex flex-row items-center gap-2 justify-start'> 
            <MdHealthAndSafety className='text-2xl'/>Health and social affairs
          </div>
        </AccordionTitle>
        <AccordionContent className='p-4'>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer border-b-2 border-gray-200">
            a. Legal assistance
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            b. Choosing a primary care clinic
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            c. Where to seek treatment - National Health Fund
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            d. Insurance
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            e. Social Welfare Center
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            f. Pharmacy
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            g. Prescription
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle className='hover:underline p-4 text-xl text-[#EA613D] hover:text-[#FF8A65] hover:drop-shadow-[0_0_8px_#EA613D] transition duration-300 cursor-pointer border-b-2 border-gray-200'>
          <div className='flex flex-row items-center gap-2 justify-start'> 
            <TbCalendarTime className='text-2xl'/>Free time
          </div>
        </AccordionTitle>
        <AccordionContent className='p-4'>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            a. Event calendar
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            b. PŁOCK ARTA
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            c. POKIS
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            d. MOSIR
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            e. MDK
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100cursor-pointer">
            f. SDK
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            g. Płock Library
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            h. Sports
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            i. Culture
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            j. Recreation
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            k. Hobby
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            l. Religion
          </p>
          <p className="mb-2 text-gray-500 rounded-lg px-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer">
            m. University of the Third Age
          </p>
        </AccordionContent>
      </AccordionPanel>
             </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KnowledgeBase