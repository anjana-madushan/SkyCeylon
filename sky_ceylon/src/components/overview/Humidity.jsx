import { BsDroplet } from "react-icons/bs";

const Humidity = ({ value }) => {

  return (
    <div className="flex flex-col bg-neutral-800 border-none rounded-2xl px-8 py-3 gap-3">
      <div className="flex items-center gap-2">
        <BsDroplet className="text-white" />
        <p className="text-white">Humidity</p>
      </div>
      <p className="text-3xl text-center font-lubrifont text-blue-100">
        {value ?? '--'}
        <span className="font-oswald text-2xl">{value ? '%' : ''}</span>
      </p>
    </div>
  )
}

export default Humidity