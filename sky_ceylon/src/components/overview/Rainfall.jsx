import { BsCloudRain } from "react-icons/bs";
import { getRainfallInfo } from "../../util/rainfallInfo";

const Rainfall = ({ value }) => {
  return (
    <div className="flex flex-col bg-gray-100 border-none rounded-2xl px-8 py-2 gap-8">
      <div className="flex items-center gap-2">
        <BsCloudRain />
        <span className="text-gray-500">Rainfall</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-3xl">{value ?? '--'}{value ? 'mm' : ''}</p>
        <p className="text-gray-400 text-sm text-center">Expect {value ? getRainfallInfo(value) : ''} today.</p>
      </div>
    </div>
  )
}

export default Rainfall