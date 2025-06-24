import Dropdown from '../DropDown';
import { useEffect, useState } from 'react';

const Temperature = ({ condition, temp_c, feelslike_c, temp_f, feelslike_f, timestamp }) => {

  const [temp, setTemp] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState('Celsius');
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(null);

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

  const todayDate = timestamp?.split(" ")[0];
  const todayTime = timestamp?.split(" ")[1];

  //Retrieving the day of the week
  const date = new Date(todayDate);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className='bg-blue-200 pl-4 py-2 flex flex-col gap-[2px] border-none rounded-2xl justify-center h-full'>
      <div className='flex w-full justify-between'>
        <div className='flex sm:flex-row flex-col sm:justify-between sm:w-2/3 gap-2'>
        <p className='font-lubrifont text-gray-600'>{todayDate}</p>
        <p className='font-oswald text-gray-600'>{dayName}</p>
        <p className='font-lubrifont text-gray-600'>{todayTime}</p>
        </div>
        <Dropdown selected={selectedUnit} setSelected={setSelectedUnit} />
      </div>
      <div className='flex sm:flex-row flex-col items-center sm:my-5  sm:justify-between pr-4'>
        <img
          src={condition?.icon?.replace("64x64", "128x128") || null}
          className='w-25 h-25'
        />
        <div className='text-center'>
          <p className='text-6xl md:mr-5 font-lubrifont'>
            {temp ?? '--'}{selectedUnit === 'Celsius' ? '°C' : '°F'} </p>
          <p>Feels like <span className='font-lubrifont'>{feelsLikeTemp ?? '--'}{selectedUnit === 'Celsius' ? '°C' : '°F'}</span></p>
        </div>
        <p className='text-gray-600 font-oswald text-xl text-center'>
          {condition?.text
            ? `There will be ${condition?.text}.`
            : 'Weather description unavailable'}
        </p>
      </div>
    </div>
  )
}

export default Temperature