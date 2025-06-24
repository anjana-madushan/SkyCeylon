import { useState, useEffect } from "react";
import axios from "axios";
import { ImLocation } from "react-icons/im";
import Today from "./Forcast/Today";
import NextThreeDays from "./Forcast/NextThreeDays";
import Temperature from "./overview/Temperature";
import Wind from './overview/Wind';
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
  const [location, setLocation] = useState('Colombo');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_WEATHER_API_BASE_URL}/forecast.json`, {
          params: {
            key: import.meta.env.VITE_WEATHER_API,
            q: location,
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
  }, [location]);

  const currentWeather = weather?.current;
  const locationDetails = weather?.location;
  const forecastDetails = weather?.forecast?.forecastday || '';

  return (
    <div className="flex flex-col px-4 h-screen w-screen">
      {!loading ? (
        <>
          <div>
            <Header location={locationDetails} setLocation={setLocation} />
          </div>

          <div className='flex md:hidden justify-center'>
            <ImLocation className='text-xl text-blue-100' />
            <p className='text-center text-sm text-white font-oswald'>
              {locationDetails?.name || ''}, {locationDetails?.region || ''}, {locationDetails?.country || ''}
            </p>
          </div>
          <div className="m-1 flex-1">
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:h-[85vh] gap-3">

                <div className="w-full md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
                    <div className="col-start-1 col-end-3 md:col-span-2">
                      <Temperature
                        condition={currentWeather?.condition}
                        temp_c={currentWeather?.temp_c}
                        temp_f={currentWeather?.temp_f}
                        feelslike_c={currentWeather?.feelslike_c}
                        feelslike_f={currentWeather?.feelslike_f}
                        timestamp={locationDetails?.localtime}
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-1 col-span-2 md:col-span-1">
                      <Humidity value={currentWeather?.humidity} />
                      <CloudCover value={currentWeather?.cloud} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Wind speed={currentWeather?.wind_kph} direction={currentWeather?.wind_dir} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <UV value={currentWeather?.uv} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Rainfall value={currentWeather?.precip_mm} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <AirQuality value={currentWeather?.air_quality["us-epa-index"]} />
                    </div>
                    <div className="col-span-2">
                      <SunSetRise astro={forecastDetails[0]?.astro} />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col gap-4 h-full">
                  <div className="overflow-y-scroll md:h-7/12 h-[600px]">
                    <Today forcast={forecastDetails[0]?.hour} />
                  </div>
                  <div className="flex-1">
                    <NextThreeDays forcast={forecastDetails} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )
      }
    </div >

  );
}

export default Dashboard