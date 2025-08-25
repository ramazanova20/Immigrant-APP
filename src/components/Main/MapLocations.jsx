import React, { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

import { FaMapLocationDot } from "react-icons/fa6";

function MapLocations() {
  const [mapLocations, setMapLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mapLocations")
      .then((res) => res.json())
      .then((data) => setMapLocations(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (mapLocations.length === 0) {
    return <p>Loading Map Locations...</p>;
  }

  return (
    <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-between gap-7">
        <div className="bg-white rounded-2xl shadow p-6">
            <div className='border-b-2 border-gray-200 flex flex-row items-center gap-2 justify-start mb-4 text-[#EA613D]'>
              <FaMapLocationDot className=' text-2xl mb-4'/><h2 className="text-2xl font-semibold mb-4 text-[#EA613D]">Map Locations</h2>
            </div>
          {mapLocations.map((location, idx) => (
            <Accordion key={idx}>
              <AccordionPanel>
                <AccordionTitle className="text-base font-medium">
                  {location.name}
                </AccordionTitle>
                <AccordionContent>
                  <p className="text-gray-600">{location.address}</p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          ))}
        </div>
    </div>
  );
}

export default MapLocations;
