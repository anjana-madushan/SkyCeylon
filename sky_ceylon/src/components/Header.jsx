import SearchBar from './searchBar';
import { ImLocation } from "react-icons/im";

const Header = ({ location, setLocation }) => {

  return (
    <div className='flex bg-transparent w-full justify-between border-none rounded-2xl items-center p-4'>
      <p className="text-blue-200 text-3xl font-semibold">Sky Ceylon</p>
      <div className="flex gap-1 items-center">
        <ImLocation className='text-xl text-blue-100' />
        <p className="text-xl text-blue-100">{location?.name || ''}, {location?.region || ''}, {location?.country}</p>
      </div>
      <div className='flex-1 max-w-md'>
        <SearchBar setLocation={setLocation} />
      </div>
    </div >
  )
}

export default Header