import { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import polish from "../../assets/polish.png";
import ukraine from "../../assets/ukraine.png";
import russian from "../../assets/russian.png";
import uk from "../../assets/uk.png";

function FlagIcon() {
  const flags = [
    { id: 1, img: polish, alt: "Polish" },
    { id: 2, img: ukraine, alt: "Ukraine" },
    { id: 3, img: russian, alt: "Russian" },
    { id: 4, img: uk, alt: "Uk" },
  ];

  const [selectedFlagId, setSelectedFlagId] = useState(1);

  const selectedFlag = flags.find(flag => flag.id === selectedFlagId);

  return (
    <Dropdown
      className="border-0 shadow-xl/30 shadow-amber-800 shadow-lg pt-4 rounded-md min-w-[150px] mt-1 !top-4 bg-gray-200"
      label={<img src={selectedFlag.img} alt={selectedFlag.alt} className="w-8 h-6 transition-transform duration-300 hover:scale-100" />}
      dismissOnClick={false}
      inline
    >
      {flags.map((flag) => (
        <DropdownItem
          key={flag.id}
          onClick={() => setSelectedFlagId(flag.id)}
        >
          <img src={flag.img} alt={flag.alt} className="border-1 border-solid transition-transform duration-300 hover:scale-110 mb-4 w-8 h-6" />
        </DropdownItem>
      ))}
    </Dropdown>
  );
}

export default FlagIcon;
