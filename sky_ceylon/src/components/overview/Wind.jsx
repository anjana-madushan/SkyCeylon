import { WiStrongWind } from "react-icons/wi";
import { WindDirection } from "../../util/windDirection";


const Wind = () => {

  const abbr_full = WindDirection('WNW');

  return (
    <div className="bg-gray-100 border-none rounded-2xl px-8 py-2 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <WiStrongWind />
        <p className="text-gray-500">Wind</p>
      </div>
      <div className="flex flex-col justify-between mx-10 gap-2">
        <div className="gap-2 items-center">
          <p className="text-gray-500">Speed</p>
          <p className="text-2xl">15 Kph</p>
        </div>
        <div className="gap-2 items-center">
          <p className="text-gray-500">Direction</p>
          <p className="text-2xl">WWN</p>
          <p className="text-gray-400 text-sm">({abbr_full})</p>
        </div>
      </div>
    </div>
  )
}

export default Wind