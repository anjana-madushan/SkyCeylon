import { LuSunMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";

const SunSetRise = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100 border-none rounded-2xl px-8 py-4">
      <div className="flex items-center gap-2 mb-4">
        <LuSunMoon />
        <p className="text-gray-500">Sun & Moon Summary</p>
      </div>
      <div className="flex h-full items-center divide-x divide-gray-300">
        <div className="w-1/2 px-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-gray-700 font-semibold text-xl">Sun</p>
            <GoSun className="text-xl" />
          </div>
          <div className="text-xl text-gray-600">
            <p>Rise - 06:20 AM</p>
            <p>Set &nbsp;&nbsp;- 05:20 PM</p>
          </div>
        </div>
        <div className="w-1/2 px-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-gray-700 font-semibold text-xl">Moon</p>
            <GoMoon className="text-xl" />
          </div>
          <div className="text-xl text-gray-600">
            <p>Rise - 06:20 AM</p>
            <p>Set &nbsp;&nbsp;- 05:20 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SunSetRise