import { IconUmbrella } from "@tabler/icons-react";
import classes from "./preloader.module.css";

export default function Preloader({ Icon = IconUmbrella }) {
  return <div className={classes.preloader}>
    <Icon
      stroke={1.5}
      className={classes.icon}
    />
  </div>;
};
