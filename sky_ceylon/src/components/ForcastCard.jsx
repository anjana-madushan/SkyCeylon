

const ForcastCard = ({ time, condition, temp, humidity, uv, windSpeed }) => {

  return (
    <div className='flex items-center justify-between gap-2 mb-2 text-blue-100'>
      <img
        src={condition?.icon || null}
      />
      <div className='flex flex-col gap-1 justify-start w-20'>
        <p className='font-lubrifont'>{time || null}</p>
        <p className='text-sm'>{condition?.text || null}</p>
      </div>
      <p className='text-3xl font-lubrifont justify-start'>{typeof temp === 'number'
        ? (Number.isInteger(temp) ? temp.toFixed(1) : temp)
        : '--'}</p>
      <div className='flex flex-col gap-1 justify-center text-sm'>
        <p>Wind Speed: <span className="font-lubrifont">{windSpeed ?? '--'}</span></p>
        <p>Humidity: <span className="font-lubrifont">{humidity ?? '--'}</span></p>
        <p>UV: <span className="font-lubrifont">{uv ?? '--'}</span></p>
      </div>
    </div>
  )
}

export default ForcastCard