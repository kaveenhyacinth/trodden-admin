import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import { makeStyles } from "@material-ui/core";
import { Colors } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 50,
    backgroundColor: Colors.primary,
  },
}));

export const SideNavigation = () => {
  const classes = useStyles();
  return <div className={classes.root}>hello</div>;
};
