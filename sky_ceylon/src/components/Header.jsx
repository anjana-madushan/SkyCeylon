import SearchBar from './searchBar';
import { ImLocation } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Sidebar from './Sidebar'

const Header = ({ location, setLocation }) => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='flex bg-transparent w-full justify-between border-none rounded-2xl items-center px-4 py-6'>
      <p className="text-blue-200 text-3xl font-semibold">Sky Ceylon</p>
      <button className='md:hidden' onClick={() => setShowSidebar(true)}>
        <GiHamburgerMenu className='text-2xl text-blue-200' />
      </button>
      {showSidebar && (
        <Sidebar
          location={location}
          setLocation={setLocation}
          onClose={() => setShowSidebar(false)}
        />
      )}
      <div className='md:flex hidden w-2/3 justify-end gap-10'>
        <div className="flex gap-1 items-center">
          <ImLocation className='text-xl text-blue-100' />
          <p className="text-xl text-blue-100">{location?.name || ''}, {location?.region || ''}, {location?.country}</p>
        </div>
        <div className='flex-1 max-w-md'>
          <SearchBar setLocation={setLocation} />
        </div>
      </div>
    </div >
  )
}

export default Header