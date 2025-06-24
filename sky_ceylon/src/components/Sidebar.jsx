import { ImLocation } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";

const Sidebar = ({ location, setLocation, onClose }) => {

  return (
    <div className="fixed top-0 left-0 h-full w-80 bg-[#121212] z-50 flex flex-col justify-between py-10 px-5">

      <div className="flex justify-between items-center mb-6">
        <p className="text-blue-200 text-3xl font-semibold">Sky Ceylon</p>
        <button onClick={onClose}>
          <IoMdClose className="text-2xl text-blue-200" />
        </button>
      </div>

      <div className="flex-1">
        <SearchBar setLocation={setLocation} />
      </div>

      <div className="flex flex-col items-center text-center gap-2 mt-6">
        <div className="flex items-center gap-2 mt-6">
          <ImLocation className="text-xl text-blue-100" />
          <p className="text-blue-100">
            {location?.name || ''}, {location?.region || ''}, {location?.country || ''}
          </p>
        </div>
        <p className="text-blue-100">
          {location?.localtime || ''}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
