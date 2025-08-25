import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle  } from "flowbite-react";

import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";

function Fag() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/faq")
      .then((res) => res.json())
      .then((data) => setFaq(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (faq.length === 0) {
    return <p>Loading FAQs...</p>;
  }
  return (
    <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-between gap-7">
         <div className="bg-white rounded-2xl shadow p-6">
            <div className='border-b-2 border-gray-200 flex flex-row items-center gap-2 justify-start mb-4 text-[#EA613D]'>
              <FaQuestion className=' text-2xl mb-4'/><h2 className="text-2xl font-semibold mb-4 text-[#EA613D]">FAQ</h2>
            </div>
      
      {faq.map((category, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-700">{category.category}</h3>
          <Accordion>
            {category.questions.map((item, qIdx) => (
              <AccordionPanel key={qIdx}>
                <AccordionTitle className="text-base font-medium">
                  {item.q}
                </AccordionTitle>
                <AccordionContent>
                  <p className="text-gray-600">{item.a}</p>
                </AccordionContent>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Fag