import { MdMyLocation } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        placeholder='Search City...'
        className='w-full px-6 py-2 rounded-md border-3 border-gray-300 outline-none'
      />
      <button type="submit"
        className="absolute right-1 top-1 bottom-1 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">
        <MdMyLocation />
      </button>
    </div>
  )
}

export default SearchBar