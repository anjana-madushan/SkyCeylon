// import { useEffect } from "react";
// import axios from "axios";

const Dashboard = () => {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json`, {
  //         params: {
  //           key: import.meta.env.VITE_WEATHER_API_KEY,
  //           q: 'Colombo',
  //           days: 3
  //         }
  //       });
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="bg-gray-100 border-none rounded-2xl h-full p-4">
      Dashboard
    </div>
  )
}

export default Dashboard