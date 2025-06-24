const ForcastCard = ({ time, condition, temp, humidity, uv, windSpeed }) => {

  return (
    <div className='flex items-center justify-between gap-2 mb-2 text-blue-100'>
      <img
        src={condition?.icon || null}
      />
      <div className='flex flex-col gap-1 justify-start w-20'>
        <p className='text-sm md:text-base font-lubrifont'>{time || null}</p>
        <p className='text-sm'>{condition?.text || null}</p>
      </div>
      <div className="flex md:flex-col lg:flex-row sm:flex-row flex-col items-center sm:justify-between w-1/2">
        <p className='text-3xl font-lubrifont justify-start'>{typeof temp === 'number'
          ? (Number.isInteger(temp) ? temp.toFixed(1) : temp)
          : '--'}°C</p>
        <div className='flex flex-col gap-1 justify-center text-sm break-words overflow-hidden'>
          <p>Wind Speed: <span className="font-lubrifont">{windSpeed ?? '--'}
            <span className="font-oswald">{windSpeed ? 'kph' : ''}</span>
          </span>
          </p>
          <p>Humidity: <span className="font-lubrifont">{humidity ?? '--'}
            <span className="font-oswald">{humidity ? '%' : ''}</span>
          </span>
          </p>
          <p>UV: <span className="font-lubrifont">{uv ?? '--'}</span></p>
        </div>
      </div>

    </div>
  )
}

export default ForcastCard