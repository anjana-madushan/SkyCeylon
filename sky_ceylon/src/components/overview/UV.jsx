import { WiDaySunny } from "react-icons/wi";
import { getUVLevelInfo } from "../../util/uvLevelInfo";

const UV = () => {

  const maxUV = 11;
  const uvIndex = 10;
  const uvInfo = getUVLevelInfo(uvIndex);

  const getColor = (value) => {
    if (value < 3) return 'green-500';
    if (value < 6) return 'yellow-400';
    if (value < 8) return 'orange-500';
    if (value < 11) return 'red-500';
    return 'purple-700';
  };

  return (
    <div className='flex flex-col bg-gray-100 border-none rounded-2xl px-8 py-2 gap-3'>
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          <WiDaySunny />
          <span className="text-gray-500">UV Index</span>
        </div>
        <span className={`text-sm text-${getColor(uvIndex)} font-semibold`}>{uvIndex} / {maxUV}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full bg-${getColor(uvIndex)}`}
          style={{ width: `${uvIndex > 11 ? (100) : (uvIndex / maxUV) * 100}%` }}
        />
      </div>
      <p className={`text-center text-${getColor(uvIndex)}`}>{uvInfo.level}</p>
      <p className="text-gray-400 text-sm text-center">{uvInfo.description}</p>
    </div>
  );
}

export default UV