import React from 'react'

const ForcastCard = ({ img, time, condition, temp, humidity, uv, windSpeed }) => {

  return (
    <div className='flex items-center justify-between mb-2'>
      <img
        src={img}
      />
      <div className='flex flex-col gap-1 justify-center text-gray-500'>
        <p className='text-xs font-semibold'>{time}</p>
        <p className='text-xs font-semibold'>{condition}</p>
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