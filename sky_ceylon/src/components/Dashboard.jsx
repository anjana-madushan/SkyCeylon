// import { useEffect } from "react";
// import axios from "axios";
import Today from "./Forcast/Today";
import NextThreeDays from "./Forcast/NextThreeDays";

import Temperature from "./overview/temperature"
import Wind from "./overview/wind";
import UV from "./overview/UV";
import Rainfall from "./overview/Rainfall";
import Humidity from "./overview/Humidity";
import CloudCover from "./overview/CloudCover";
import SunSetRise from "./overview/SunSetRise";

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
    <div className="h-full">
      <div className="flex">
        <div className="flex flex-col w-2/3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2"><Temperature /></div>
            <div className="flex flex-col gap-2">
              <Humidity />
              <CloudCover />
            </div>
            <Wind />
            <UV />
            <Rainfall />
            <SunSetRise />
          </div>
        </div>
        <div className="flex-1 flex-col ml-4">
          <div className="mb-4">
            <Today />
          </div>
          <div className="flex-1">
            <NextThreeDays />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard