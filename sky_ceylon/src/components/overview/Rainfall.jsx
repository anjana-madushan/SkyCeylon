import { BsCloudRain } from "react-icons/bs";
import { getRainfallInfo } from "../../util/rainfallInfo";

const Rainfall = ({ value }) => {
  return (
    <div className="flex flex-col bg-neutral-800 border-none rounded-2xl px-8 py-2 gap-8 h-full">
      <div className="flex items-center gap-2">
        <BsCloudRain className="text-white" />
        <span className="text-white">Rainfall</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-3xl text-center font-lubrifont text-blue-100">
          {value ?? '--'}
          <span className="font-oswald text-2xl">{value ? 'mm' : ''}</span>
        </p>
        <p className="text-gray-400 text-sm text-center">Expect {value ? getRainfallInfo(value) : ''} today.</p>
      </div>
    </div>
  )
}

export default Rainfall