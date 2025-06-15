import React from 'react'

const Temperature = () => {
  return (
    <div className='bg-gray-100 px-4 py-2 flex flex-col gap-1 border-none rounded-2xl'>
      <p className='text-gray-500'>Current Weather</p>
      <p className='font-semibold'>11.49 AM</p>
      <div className='flex items-center gap-10'>
        <img
          src="//cdn.weatherapi.com/weather/64x64/day/356.png"
        />
        <p className='text-6xl'>25°C</p>
        <p>Feels like 28°C</p>
      </div>
      <p>Expect moderate or heavy rain shower</p>
    </div>
  )
}

export default Temperature