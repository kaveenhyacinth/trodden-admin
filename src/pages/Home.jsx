import React, { useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { MemoryChart, InfoBox } from "../lib/components";
import { Colors } from "../lib/theme";
import api from "../api";

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
  const [totals, setTotals] = useState({
    caravanCount: 0,
    nomadCount: 0,
    destinationCount: 0,
    tripCount: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get.getTotals();
        console.log(data);
        if (!data.success) throw new Error(data.msg);
        setTotals((prevState) => ({ ...prevState, ...data.result }));
      } catch (error) {
        alert("Something went wrong! " + error.message);
      }
    })();
  }, [setTotals]);

  return (
    <Container className={classes.root}>
      <Box className={classes.infobar}>
        <InfoBox
          className={classes.infobox}
          title="Total Nomads"
          amount={totals.nomadCount}
        />
        <InfoBox
          className={classes.infobox}
          title="Total Caravans"
          amount={totals.caravanCount}
        />
        <InfoBox
          className={classes.infobox}
          title="Total Trips"
          amount={totals.tripCount}
        />
        <InfoBox
          className={classes.infobox}
          title="Total Destinations"
          amount={totals.destinationCount}
        />
      </Box>
      <Box className={classes.chartbox} boxShadow={2}>
        <MemoryChart />
      </Box>
    </Container>
  );
};
