import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../theme";

export const Copyright = () => {
  return (
    <Box mt={8}>
      <Typography
        variant="body2"
        style={{ color: Colors.primary }}
        align="center"
      >
        {`Copyright © Trodden ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
};
