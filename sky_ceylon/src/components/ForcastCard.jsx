

const ForcastCard = ({ time, condition, temp, humidity, uv, windSpeed }) => {

  return (
    <div className='flex items-center justify-between mb-2'>
      <img
        src={condition?.icon || null}
      />
      <div className='flex flex-col gap-1 justify-center text-gray-500'>
        <p className='text-xs font-semibold'>{time || null}</p>
        <p className='text-xs font-semibold'>{condition?.text || null}</p>
      </div>
      <p className='text-3xl'>{temp}</p>
      <div className='flex flex-col gap-1 justify-center text-gray-500'>
        <p className='text-xs font-semibold'>Wind Speed: {windSpeed}</p>
        <p className='text-xs font-semibold'>Humidity:{humidity}</p>
        <p className='text-xs font-semibold'>UV: {uv}</p>
      </div>
    </div>
  )
}

export default ForcastCard