import { WiStrongWind } from "react-icons/wi";
import { WindDirection } from "../../util/windDirection";


const Wind = ({ speed, direction }) => {

  const abbr_full = WindDirection(direction || '');

  return (
    <div className="bg-neutral-800 border-none rounded-2xl px-8 py-2 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <WiStrongWind className="text-white" />
        <p className="text-white">Wind</p>
      </div>
      <div className="flex flex-col justify-between mx-10 gap-2">
        <div className="gap-2 items-center">
          <p className="text-white">Speed</p>
          <p className="text-3xl font-lubrifont text-blue-100">
            {speed ?? '--'}
            <span className="font-oswald text-2xl">{speed ? 'kph' : ''}</span>
          </p>
        </div>
        <div className="gap-2 items-center">
          <p className="text-white">Direction</p>
          <p className="text-2xl font-oswald text-blue-100">{direction ? direction : ''}</p>
          <p className="text-gray-400 text-sm">({abbr_full})</p>
        </div>
      </div>
    </div>
  )
}

export default Wind