import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { MemoryChart, InfoBox } from "../lib/components";
import { Colors } from "../lib/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 50px",
  },
  infobar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  infobox: {
    width: "25%",
    margin: "0 10px",
  },
  lowerbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  chartbox: {
    margin: "0 10px",
    height: 400,
    padding: 20,
  },
  databox: {
    width: "35%",
    margin: "0 10px",
    padding: 20,
    borderRadius: 5,
  },
}));

export const Home = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.infobar}>
        <InfoBox className={classes.infobox} title="Total Nomads" amount={0} />
        <InfoBox
          className={classes.infobox}
          title="Total Caravans"
          amount={0}
        />
        <InfoBox className={classes.infobox} title="Total Trips" amount={0} />
        <InfoBox
          className={classes.infobox}
          title="Total Destinations"
          amount={0}
        />
      </Box>
      <Box className={classes.chartbox} boxShadow={2}>
        <MemoryChart />
      </Box>
    </Container>
  );
};
