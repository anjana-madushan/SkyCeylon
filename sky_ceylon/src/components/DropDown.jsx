import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Celsius", "Fahrenheit"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center gap-1 px-2 w-35 text-gray-600 rounded-md hover:text-gray-600 text-sm"
      >
        {selected}<IoIosArrowDown className="mt-1" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-30 bg-white border border-gray-200 rounded-md shadow-lg text-sm">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
