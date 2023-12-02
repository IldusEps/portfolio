import { IconUmbrella } from "@tabler/icons-react";
import classes from "./preloader.module.css";

export default function Preloader({ Icon = IconUmbrella, children = false }) {
  return <div className={classes.preloader} style={children ? { backgroundColor: "rgba(0,0,0,0)" } : {}}>
    {children ? children : (
      <Icon
        stroke={1.5}
        className={classes.icon}
      />)}
  </div>;
};
