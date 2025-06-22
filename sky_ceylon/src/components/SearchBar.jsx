import { MdMyLocation } from "react-icons/md";
import { useState } from "react";

const SearchBar = ({ setLocation }) => {

  const [input, setInput] = useState('');

  const handleClick = () => {
    setLocation(input);
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        placeholder='Search City...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full px-6 py-2 rounded-md border-3 border-gray-300 outline-none'
      />
      <button type="submit"
        className="absolute right-1 top-1 bottom-1 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        onClick={handleClick}>
        <MdMyLocation />
      </button>
    </div>
  )
}

export default SearchBar