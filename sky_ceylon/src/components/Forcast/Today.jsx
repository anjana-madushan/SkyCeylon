import ForcastCard from '../ForcastCard'
import forecastData from '../../data/data.json';

const Today = () => {
  return (
    <div className='flex flex-col bg-gray-100 border-none rounded-2xl px-4 pt-2 pb-3 gap-3'>
      <p className='text-gray-500 sticky top-0 bg-gray-100 z-10'>Today Forcast</p>
      {forecastData.map((item, index) => (
        <ForcastCard key={index} img={item.icon} humidity={item.humidity} condition={item.condition} temp={item.temp} windSpeed={item.windSpeed}
          time={item.time} uv={item.uv} />
      ))}
    </div>
  )
}

export default Today