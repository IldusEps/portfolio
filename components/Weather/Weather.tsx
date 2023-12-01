"use client";
import { useState, useEffect } from "react";
import WeatherComp from "@components/Weather/weatherComp";
import { Flex } from "@mantine/core";
import { useRouter } from "next/navigation";
import Preloader from "../preloader/preloader";
require("dayjs/locale/ru");

const weatherData = {
  coord: {
    lon: 56.0375,
    lat: 54.775,
  },
  weather: [
    {
      id: 800,
      main: "Clouds",
      description: "ясно",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 1.08,
    feels_like: -3.99,
    temp_min: -0.39,
    temp_max: 1.08,
    pressure: 999,
    humidity: 96,
  },
  visibility: 10000,
  wind: {
    speed: 5.81,
    deg: 205,
    gust: 12.96,
  },
  clouds: {
    all: 4,
  },
  dt: 1701109399,
  sys: {
    type: 2,
    id: 2087924,
    country: "RU",
    sunrise: 1701058093,
    sunset: 1701086325,
  },
  timezone: 18000,
  id: 479561,
  name: "Уфа",
  cod: 200,
};
const id = process.env.NEXT_PUBLIC_DATA_API_KEY;

export default function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState("Уфа");
  const [date, setDate] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true)
  }, []);

  const getWeather = (day) => {
    setDate(day)
    let url = "";
    // if (day && day instanceof Date && day != new Date()) {
    //   url = `https://api.openweathermap.org/data/3.0/onecall/day_summary?`
    //   if (typeof position === 'string' || position instanceof String)
    //     url += `q=${position}`
    //   else
    //     url += `lat=${position.latitude}&lon=${position.longitude}`
    //   url += `&units=metric&lang=ru&appid=${id}&date=${dayjs(day).locale('en').format('YYYY-MM-DD')}`
    // } else {
    url = `https://api.openweathermap.org/data/2.5/weather?`
    if (typeof position === 'string' || position instanceof String)
      url += `q=${position}`
    else
      url += `lat=${position.latitude}&lon=${position.longitude}`
    url += `&units=metric&lang=ru&appid=${id}`
    // }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data);
        setTimeout(() => setLoading(false), 500)
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position.coords)
      getWeather(date)
    })
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position.coords)
      getWeather(date)
    }, () => setTimeout(() => {
      setLoading(false)
      getWeather(date)
    }, 500))
  }, [navigator.geolocation]);

  return (
    <Flex
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap" style={{ zIndex: 2, height: '80%' }}
    >
      {loading && <Preloader />}
      <WeatherComp data={data} onChangeDate={getWeather} />
    </Flex>
  );
}
