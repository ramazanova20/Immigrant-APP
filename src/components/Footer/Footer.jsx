import React, { useState } from 'react'
import { FiMessageSquare } from "react-icons/fi";
import QuestionBar from './QuestionBar';
import { IoIosClose } from "react-icons/io";
function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" text-white fixed bottom-0 left-[40%] sm:left-[46%] md:left-[48%] rounded-4xl sm:mb-5">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center py-4 relative" style={{ height: '60px' }}>
        
        <div className={`relative flex items-center justify-center rounded-4xl w-14 h-14 lg:w-18 lg:h-18
          ${!isOpen ? "bg-[#FF6C01]" : "bg-transparent"}
        `}>
          {!isOpen && (
            <div className='bg-[#FF6C01] rounded-4xl'>
            <FiMessageSquare
              onClick={() => setIsOpen(true)}
              size={24}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            </div>
          )}

        
          <div className={`absolute bottom-0 left-1/2  rounded-t-lg shadow-lg p-1  
              transition-transform duration-300 ease-in-out z-10
              ${isOpen 
                ? "translate-x-[-50%] translate-y-0 opacity-100" 
                : "translate-x-[-50%] translate-y-full opacity-0 pointer-events-none"
              }
             min-w-[200px] md:w-[600px] lg:w-[800px]
            `}
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-black text-xl mb-2 hover:text-gray-400"
            >
              <IoIosClose />
            </button>
            <QuestionBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
