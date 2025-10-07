import React, { useEffect, useState } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );
        const data = await res.json();
        console.log(data);
        
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
        <div className='bg-yellow-50'>
            Today Weather
            <p>{weather.current_units.time} IST</p>

            <ul>
              {weather.hourly.time.map((time, index) => (
                <li  key={index}>
                    {time}

                    
                    
                </li>
              ))}
            </ul>
            
        </div>

    </div>
  );
}

export default Weather;
