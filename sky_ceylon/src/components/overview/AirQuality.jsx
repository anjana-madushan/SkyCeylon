import { GiSmokeBomb } from "react-icons/gi";

const AirQuality = ({ value }) => {

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
      return { level: '', description: '' };
    }
  };


  return (
    <div className='flex flex-col bg-neutral-800 border-none rounded-2xl px-8 py-2 gap-2'>
      <div className="flex items-center gap-2">
        <GiSmokeBomb className="text-white" />
        <p className="text-white">Air Quality</p>
      </div>
      <div className="flex flex-col items-center">
        <p className='text-xl font-semibold mb-2 text-blue-200 font-lubrifont'>
          {value !== null && value !== undefined ? value : ''}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className='h-4 rounded-full bg-blue-400'
            style={{ width: `${value > maxIndex ? (100) : (value / maxIndex) * 100}%` }}
          />
        </div>
        <div className="w-full flex justify-between px-1 text-xs text-white my-1">
          {[0, 2, 4, 6].map((tick, i) => (
            <span key={i}>{tick}</span>
          ))}
        </div>
        <p className='text-center mt-1 text-blue-200'>{getAirQualityInfo(value).level}</p>
        <p className="text-gray-400 text-sm text-center mt-1">{getAirQualityInfo(value).description}</p>
      </div>
    </div>
  )
}

export default AirQuality