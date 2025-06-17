import { GiSmokeBomb } from "react-icons/gi";

const AirQuality = () => {

  const airIndex = 1;
  const maxIndex = 6;

  const getAirQualityInfo = (index) => {
    if (index === 1) {
      return { level: 'Good', description: 'Air quality is clean and healthy.' };
    } else if (index === 2) {
      return { level: 'Moderate', description: 'Acceptable, but some pollutants may affect sensitive people.' };
    } else if (index === 3) {
      return { level: 'Unhealthy for Sensitive Groups', description: 'Sensitive groups may feel mild effects.' };
    } else if (index === 4) {
      return { level: 'Unhealthy', description: 'Everyone may begin to feel effects.' };
    } else if (index === 5) {
      return { level: 'Very Unhealthy', description: 'Health alert: serious effects possible.' };
    } else if (index === 6) {
      return { level: 'Hazardous', description: 'Emergency: avoid outdoor exposure completely.' };
    } else {
      return { level: '', description: '', color: '' };
    }
  };


  return (
    <div className='flex flex-col bg-gray-100 border-none rounded-2xl px-8 pt-2 pb-3 gap-3'>
      <div className="flex items-center gap-2">
        <GiSmokeBomb />
        <p className="text-gray-500">Air Quality</p>
      </div>
      <div className="flex flex-col items-center">
        <p className='text-sm font-semibold mb-2 text-blue-400'>{airIndex} / {maxIndex}</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className='h-4 rounded-full bg-blue-400'
            style={{ width: `${airIndex > maxIndex ? (100) : (airIndex / maxIndex) * 100}%` }}
          />
        </div>
        <div className="w-full flex justify-between px-1 text-xs text-gray-500 my-1">
          {[0, 2, 4, 6].map((tick, i) => (
            <span key={i}>{tick}</span>
          ))}
        </div>
        <p className='text-center mt-2 text-blue-400'>{getAirQualityInfo(airIndex).level}</p>
        <p className="text-gray-400 text-sm text-center mt-2">{getAirQualityInfo(airIndex).description}</p>
      </div>
    </div>
  )
}

export default AirQuality