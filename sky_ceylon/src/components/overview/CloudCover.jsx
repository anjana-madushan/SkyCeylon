import { BsCloud } from "react-icons/bs";

const CloudCover = ({ value }) => {
  return (
    <div className="flex flex-col bg-neutral-800 border-none rounded-2xl px-8 py-3 gap-3 h-full">
      <div className="flex items-center gap-2">
        <BsCloud className="text-white" />
        <p className="text-white">Cloud Cover</p>
      </div>
      <p className="text-3xl text-center font-lubrifont text-blue-100">
        {value ?? '--'}
        <span className="font-oswald text-2xl">{value ? '%' : ''}</span>
      </p>
    </div>
  )
}

export default CloudCover