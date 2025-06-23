import ForcastCard from '../ForcastCard';

const Today = ({ forcast }) => {

  return (
    <div className='flex flex-col bg-gray-100 border-none rounded-2xl px-4 pt-2 pb-3 gap-3'>
      <p className='text-gray-500 sticky top-0 bg-gray-100'>Today Forcast</p>
      {forcast && forcast.map((item, index) => (
        <ForcastCard key={index}
          humidity={item?.humidity}
          condition={item?.condition}
          temp={item?.temp_c}
          windSpeed={item?.wind_kph}
          time={item?.time.split(' ')[1]}
          uv={item?.uv} />
      ))}
    </div>
  )
}

export default Today