import { BsCloud } from "react-icons/bs";

const CloudCover = ({ value }) => {
  return (
    <div className="flex flex-col bg-gray-100 border-none rounded-2xl px-8 pt-2 pb-3 gap-3">
      <div className="flex items-center gap-2">
        <BsCloud />
        <p className="text-gray-500">Cloud Cover</p>
      </div>
      <p className="text-3xl text-center">{value ?? '--'}</p>
    </div>
  )
}

export default CloudCover