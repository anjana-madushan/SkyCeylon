import ForcastCard from '../ForcastCard'

const NextThreeDays = ({ forcast }) => {
  console.log(forcast)
  return (
    <div className='flex flex-col bg-gray-100 border-none rounded-2xl px-4 pt-2 pb-3 gap-3'>
      <p className='text-gray-500 sticky top-0 bg-gray-100 z-10'>Next 3 Days Forecast</p>
      {forcast && forcast?.map((item, index) => (
        <ForcastCard key={index}
          humidity={item?.day?.avghumidity}
          condition={item?.day?.condition}
          temp={item?.day?.avgtemp_c}
          windSpeed={item?.day?.maxwind_kph}
          time={item.date}
          uv={item?.day?.uv} />
      ))}
    </div>
  )
}

export default NextThreeDays