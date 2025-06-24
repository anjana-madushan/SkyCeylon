import { LuSunMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";

const SunSetRise = ({ astro }) => {

  const { moonrise, moonset, sunrise, sunset } = astro || {
    moonrise: 0, moonset: 0, sunrise: 0, sunset: 0
  }

  return (
    <div className="flex flex-col h-full bg-neutral-800 border-none rounded-2xl px-8 py-4">
      <div className="flex items-center gap-2 mb-4">
        <LuSunMoon className="text-white text-xl" />
        <p className="text-white">Sun & Moon Summary</p>
      </div>
      <div className="flex sm:flex-row flex-col items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
        <div className="sm:w-1/2 sm:px-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-white text-xl">Sun</p>
            <GoSun className="text-xl text-white" />
          </div>
          <div className="text-xl text-blue-100">
            <p>Rise - <span className="font-lubrifont">{sunrise ? `${sunrise}` : '--'}</span></p>
            <p>Set  - <span className="font-lubrifont">{sunset ? `${sunset}` : '--'}</span></p>
          </div>
        </div>
        <div className="sm:w-1/2 sm:px-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-white text-xl">Moon</p>
            <GoMoon className="text-xl text-white" />
          </div>
          <div className="text-xl text-blue-100">
            <p>Rise - <span className="font-lubrifont">{moonrise ? `${moonrise}` : '--'}</span></p>
            <p>Set - <span className="font-lubrifont">{moonset ? `${moonset}` : '--'}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SunSetRise