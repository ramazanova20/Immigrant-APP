import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle  } from "flowbite-react";

import { useEffect, useState } from "react";

import { GrResources } from "react-icons/gr";

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/resources")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (resources.length === 0) {
    return <p>Loading Resources...</p>;
  }
  return (
    <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-between gap-7">
        <div className="bg-white rounded-2xl shadow p-6">
            <div className='border-b-2 border-gray-200 flex flex-row items-center gap-2 justify-start mb-4 text-[#EA613D]'>
              <GrResources className=' text-2xl mb-4'/><h2 className="text-2xl font-semibold mb-4 text-[#EA613D]">Resources</h2>
            </div>
          {resources.map((title, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-700">{title.title}</h3>
              <Accordion>
                {title.links.map((item, tIdx) => (
                  <AccordionPanel key={tIdx}>
                    <AccordionTitle className="text-base font-medium">
                      {item.name}
                    </AccordionTitle>
                    <AccordionContent>
                      <a  href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 cursor-pointer">{item.url}</a>
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

export default Resources