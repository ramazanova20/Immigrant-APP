import React from 'react'
import { VscInfo } from "react-icons/vsc";
import { BiBookAlt } from "react-icons/bi";
import { Link } from 'react-router';

function Main() {
  return (
    <div>
        <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-between gap-7">
            <div className='m-auto w-min-[150px] mt-20'>
                <img className='w-min-[150px]' src="data:image/png;base64,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" alt="" />
            </div>
            <p className='text-center italic text-gray-600'>Welcome to the application for foreigners</p>
            <div className='m-auto text-white text-base font-bold'>
                <button className="flex flex-row justify-center items-center gap-1 mb-2 bg-[#EA613D] p-2 min-w-[200px] rounded-lg transition-transform duration-300 hover:translate-x-2">
                  <span className='flex items-center gap-2'>
                    <VscInfo className=' text-2xl font-bold' /> 
                    <Link to={`/firststeps`}>First Steps</Link>
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <button className="flex flex-row justify-center items-center gap-1 bg-[#EA613D] p-2 min-w-[200px] rounded-lg transition-transform duration-300 hover:translate-x-2">
                  <span className='flex items-center gap-2'><BiBookAlt className=' text-2xl font-bold' /> <Link to={`/knowledgebase`}>Knowledge Base</Link></span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Main