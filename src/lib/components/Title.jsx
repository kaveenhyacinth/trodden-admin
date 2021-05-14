import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Colors } from "../theme";

export const Title = (props) => {
  return (
    <Typography
      component="h2"
      variant="h6"
      style={{ color: Colors.primary }}
      gutterBottom
    >
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};
