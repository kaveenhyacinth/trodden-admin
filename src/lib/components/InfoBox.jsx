import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "./Title";

const useStyles = makeStyles({
  root: {
    padding: "20px 30px",
    borderRadius: 5,
  },
  depositContext: {
    flex: 1,
  },
});

export const InfoBox = ({ title, amount, className }) => {
  const classes = useStyles();
  return (
    <Box boxShadow={2} className={[classes.root, className]}>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {new Date().toDateString()}
      </Typography>
    </Box>
  );
};
