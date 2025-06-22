import { WiDaySunny } from "react-icons/wi";
import { getUVLevelInfo } from "../../util/uvLevelInfo";

const UV = ({ value }) => {

  const maxUV = 11;
  const uvInfo = value !== null && value !== undefined ? getUVLevelInfo(value) : '';

  return (
    <div className='flex flex-col bg-gray-100 border-none rounded-2xl px-8 py-2 gap-3'>
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          <WiDaySunny />
          <p className="text-gray-500">UV Index</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className='text-sm text-blue-400 mb-2 font-semibold'>
          {value !== null && value !== undefined ? value : ''}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className='h-4 rounded-full bg-blue-400'
            style={{ width: value ? `${value > 11 ? (100) : (value / maxUV) * 100}%` : '0%' }}
          />
        </div>
        <div className="w-full flex justify-between px-1 text-xs text-gray-500 my-1">
          {[0, 3, 6, 9, 12].map((tick, i) => (
            <span key={i}>{tick}</span>
          ))}
        </div>
        <p className='text-center text-blue-400 mt-2'>{uvInfo?.level || ''}</p>
        <p className="text-gray-400 text-sm text-center mt-2">{uvInfo?.description || ''}</p>
      </div>
    </div>
  );
}

export default UV