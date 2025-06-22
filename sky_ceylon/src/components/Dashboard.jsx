import { useState, useEffect } from "react";
import axios from "axios";
import Today from "./Forcast/Today";
import NextThreeDays from "./Forcast/NextThreeDays";
import Temperature from "./overview/temperature"
import Wind from "./overview/wind";
import UV from "./overview/UV";
import Rainfall from "./overview/Rainfall";
import Humidity from "./overview/Humidity";
import CloudCover from "./overview/CloudCover";
import SunSetRise from "./overview/SunSetRise";
import AirQuality from "./overview/AirQuality";
import Header from "./Header";

const Dashboard = () => {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_WEATHER_API_BASE_URL, {
          params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: 'Colombo',
            days: 3,
            aqi: 'yes'
          }
        })
        setWeather(response.data);
      } catch (error) {
        console.error('Error with fetchingn the data', error);
        setError('Faile to load the weather Data!!!');
      } finally {
        setLoading(false);
      }
    }
    fetchWeatherData();
  }, []);

  const currentWeather = weather?.current;
  const locationDetails = weather?.location;
  const forecastDetails = weather?.forecast?.forecastday || '';

  return (
    <div className="flex flex-col p-2 h-screen w-screen">
      {!loading ?
        <div>
          <div className="m-1">
            <Header location={locationDetails} />
          </div>

          <div className="m-1 flex-1">
            <div className="h-screen overflow-hidden">
              <div className="flex h-full">
                <div className="flex flex-col w-2/3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Temperature
                        condition={currentWeather?.condition}
                        temp_c={currentWeather?.temp_c}
                        temp_f={currentWeather?.temp_f}
                        feelslike_c={currentWeather?.feelslike_c}
                        feelslike_f={currentWeather?.feelslike_f} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Humidity value={currentWeather?.humidity} />
                      <CloudCover value={currentWeather?.cloud} />
                    </div>
                    <Wind speed={currentWeather?.wind_kph} direction={currentWeather?.wind_dir} />
                    <UV value={currentWeather?.uv} />
                    <Rainfall value={currentWeather?.precip_mm} />
                    <div className="col-span-2"><SunSetRise astro={forecastDetails[0]?.astro} /></div>
                    <AirQuality value={currentWeather?.air_quality["us-epa-index"]} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col ml-4 overflow-hidden">
                  <div className="mb-4 h-5/12 overflow-y-scroll">
                    <Today forcast={forecastDetails[0]?.hour} />
                  </div>
                  <div className="overflow-y-auto">
                    <NextThreeDays forcast={forecastDetails} />
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
        : <p>loading</p>
      }


    </div>
  );
}

export default Dashboard