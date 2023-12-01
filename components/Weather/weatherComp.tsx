import { useEffect, useState } from "react";
import dayjs from "dayjs";
require("dayjs/locale/ru");
import { UnstyledButton, Text, Paper, Group, rem, Grid } from "@mantine/core";
import {
  IconSwimming,
  IconBike,
  IconRun,
  IconChevronDown,
  IconChevronUp,
  IconTemperature,
  IconCloud,
  IconSun,
  IconBolt,
  IconCloudRain,
  IconCloudSnow,
  IconExclamationCircle,
  IconUserBolt,
  IconWind,
  IconSunrise,
  IconSunset
} from "@tabler/icons-react";
import classes from "./weather.module.css";
import { degToSideWorld } from "./weatherFunct";

export default function weatherComp({ data, onChangeDate }) {
  const [date, setDate] = useState(new Date());
  const onSetDate = (day) => {
    const newDay = day(date)
    setDate(newDay)
    onChangeDate(newDay)
  }

  const dataIcon = [
    { icon: IconTemperature, label: "Температура" },
    { icon: IconUserBolt, label: "Ощущается" },
    { label: "Погода" },
    { icon: IconWind, label: "Ветер" },
    { icon: IconSunrise, label: "Рассвет" },
    { icon: IconSunset, label: "Закат" },
  ]
  const dataText = (label: any) => (data ?
    ((label == "Температура") ? (data.main ? Math.round(data.main.temp) + "°C" : '⛔') :
      ((label == "Ощущается") ? (data.main ? Math.round(data.main.feels_like) + "°C" : '⛔') :
        ((label == "Ветер") ? (data.wind ? Math.round(data.wind.speed) + " м/с, " + degToSideWorld(data.wind.deg) : '⛔') :
          ((label == "Рассвет") ? dayjs(new Date(data.sys.sunrise * 1000)).locale("ru").format("H:mm") :
            ((label == "Закат") ? dayjs(new Date(data.sys.sunset * 1000)).locale("ru").format("H:mm") :
              ((label == "Погода") ? ((data && data.weather && data.weather[0]) ? data.weather[0].description : "") : ""))))))
    : "")

  const CloudRain = ({ stat, onChangeDate: any }) => {
    let Icon = IconExclamationCircle
    if (stat && stat.label == "Погода") {
      if (data && data.weather && data.weather[0]) {
        const cloud = data.weather[0].main
        Icon = (cloud == "Clear") ? IconSun :
          ((cloud == "Thunderstorm") ? IconBolt :
            ((cloud == "Clouds") ? IconCloud :
              ((cloud == "Drizzle") ? IconCloudRain :
                ((cloud == "Snow") ? IconCloudSnow :
                  ((cloud == "Rain") ? IconCloudRain : IconExclamationCircle)))))
      }
    } else Icon = stat.icon ? stat.icon : IconExclamationCircle
    return (
      <Icon
        style={{ width: rem(32), height: rem(32) }}
        className={classes.icon}
        stroke={1.5}
      />
    )
  }

  const stats = dataIcon.map((stat, ind) => {
    return (
      <Grid.Col span={{ base: 6, md: (ind == 0 || ind == 1 || ind == 2) ? 4 : ((ind == 3) ? 6 : 3) }}>
        <Paper
          className={classes.stat}
          radius="md"
          shadow="md"
          p="md"
          key={stat.label}
        >
          <CloudRain stat={stat} />
          <div>
            <Text className={classes.label}>{stat.label}</Text>
            <Text className={classes.value}>
              {dataText(stat.label)}
            </Text>
          </div>
        </Paper>
      </Grid.Col>
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <UnstyledButton
          className={classes.control}
          onClick={() =>
            onSetDate((current) => dayjs(current).add(1, "day").toDate())
          }
        >
          <IconChevronUp
            style={{ width: rem(32), height: rem(32) }}
            className={classes.controlIcon}
            stroke={1.5}
          />
        </UnstyledButton>

        <div className={classes.date}>
          <Text className={classes.day}>
            {dayjs(date).locale("ru").format("DD")}
          </Text>
          <Text className={classes.month}>
            {dayjs(date).locale("ru").format("DD MMMM").slice(2)}
          </Text>
        </div>

        <UnstyledButton
          className={classes.control}
          onClick={() =>
            onSetDate((current) => dayjs(current).subtract(1, "day").toDate())
          }
        >
          <IconChevronDown
            style={{ width: rem(32), height: rem(32) }}
            className={classes.controlIcon}
            stroke={1.5}
          />
        </UnstyledButton>
      </div>
      <Grid grow gutter={{ base: 5, xs: 'md', md: 'lg', xl: 50 }}>{stats}</Grid>
    </div>
  );
}
