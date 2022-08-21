import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const FestKalender = () => {
  <link
    rel="reload"
    href="https://calendar.google.com/calendar/embed?src=3mbkkinsm8u21ed86bu5vticc0%40group.calendar.google.com&ctz=Europe%2FStockholm"
  />;
  return (
    <Box sx={{mt:10}}>
      <Grid>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=3mbkkinsm8u21ed86bu5vticc0%40group.calendar.google.com&ctz=Europe%2FStockholm"
          width="100%"
          height="500"
          frameborder="0"
          scrolling="auto"
          allowtransparency="true"
          title="FestKalender"
        ></iframe>
      </Grid>
    </Box>
  );
};

export default FestKalender;
