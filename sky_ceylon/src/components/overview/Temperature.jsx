import Dropdown from '../DropDown';
import { useEffect, useState } from 'react';

const Temperature = ({ condition, temp_c, feelslike_c, temp_f, feelslike_f }) => {

  const [temp, setTemp] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState('Celsius');
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(0);

  //Get Current Time
  const now = new Date();
  const currentTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  // Update displayed temperatures based on selected unit
  useEffect(() => {
    if (selectedUnit === 'Celsius') {
      setTemp(temp_c)
      setFeelsLikeTemp(feelslike_c);
    } else if (selectedUnit === 'Fahrenheit') {
      setTemp(temp_f)
      setFeelsLikeTemp(feelslike_f);
    }
  }, [feelslike_c, feelslike_f, selectedUnit, temp_c, temp_f])

  return (
    <div className='bg-gray-100 px-8 py-2 flex flex-col gap-[2px] border-none rounded-2xl justify-center'>
      <div className='flex justify-between'>
        <p className='text-gray-500'>Current Weather</p>
        <Dropdown selected={selectedUnit} setSelected={setSelectedUnit} />
      </div>
      <p className='font-semibold'>{currentTime && currentTime}</p>
      <div className='flex items-center my-5 mx-5 justify-between'>
        <img
          src={condition?.icon || null}
          className='mr-10'
        />
        <p className='text-6xl mr-5'>{temp ?? '--'}{selectedUnit === 'Celsius' ? '°C' : '°F'} </p>
        <p>Feels like {feelsLikeTemp ?? '--'}{selectedUnit === 'Celsius' ? '°C' : '°F'}</p>
      </div>
      <p className='text-center'>
        {condition?.text
          ? `There will be ${condition?.text}`
          : 'Weather description unavailable'}
      </p>
    </div>
  )
}

export default Temperature