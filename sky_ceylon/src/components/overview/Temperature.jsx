import Dropdown from '../DropDown'

const Temperature = () => {
  return (
    <div className='bg-gray-100 px-8 py-2 flex flex-col gap-[2px] border-none rounded-2xl justify-center'>
      <div className='flex justify-between'>
        <p className='text-gray-500'>Current Weather</p>
        <Dropdown />
      </div>
      <p className='font-semibold'>11.49 AM</p>
      <div className='flex items-center my-5'>
        <img
          src="//cdn.weatherapi.com/weather/64x64/day/356.png"
          className='mr-10'
        />
        <p className='text-6xl mr-5'>25°C</p>
        <div className='flex flex-col gap-2 mr-20 text-sm'>
          <p>min - 20°C</p>
          <p>max - 30°C</p>
        </div>
        <p>Feels like 28°C</p>
      </div>
      <p>There will be moderate or heavy rain shower</p>
    </div>
  )
}

export default Temperature