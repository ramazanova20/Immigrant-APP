import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import QuestionBar from "./QuestionBar";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 lg:w-20 lg:h-20 rounded-full shadow-lg cursor-pointer transition-all duration-300 
        ${isOpen ? "bg-gray-300" : "bg-[#FF6C01]"} hover:scale-110`}
      >
        <FiMessageSquare size={28} className="text-white" />
      </div>

      
      <div
        className={`fixed bottom-20 right-2 bg-white rounded-xl shadow-2xl border border-gray-200 
          transition-transform duration-300 ease-in-out overflow-hidden
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}
          w-[300px] sm:w-[360px] md:w-[400px] h-[420px] flex flex-col`}
      >
        
        <div className="flex items-center justify-between bg-[#FF6C01] text-white px-4 py-3 shadow-md">
          <h3 className="font-semibold text-lg">AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
            <IoIosClose size={26} />
          </button>
        </div>

        <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <QuestionBar />
        </div>
      </div>
    </div>
  );
}

export default Footer;
