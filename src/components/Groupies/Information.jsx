import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { fontStyle, ThemeProvider } from "@mui/system";

const questionTheme = createTheme({
  typography: {
    h6: {
      fontSize: 20,
      color: "gray",
      fontStyle: "italic",
      margin: 1,
    },
    h5: {
      fontSize: 20,
      marginRight: 10,
    },
  },
});

export default function Questions({ user }) {
  return (
    <Box sx={{ pl: 3, mt: 3 }}>
      <Grid>
        <ThemeProvider theme={questionTheme}>
          <Typography variant="h5" guttomButtom>
            Årgång?
            <Typography variant="h6" guttomButtom>
              {user.age}
            </Typography>
          </Typography>
          <Typography variant="h5" guttomButtom>
            Hemhemma?
            <Typography variant="h6" guttomButtom>
              {user.home}
            </Typography>
          </Typography>
          <Typography variant="h5" guttomButtom>
            Program?
            <Typography variant="h6" guttomButtom>
              {user.pors}
            </Typography>
          </Typography>
          <Typography variant="h5" guttomButtom>
            Funfact/Partytrick?
            <Typography variant="h6" guttomButtom>
              {user.cons}
            </Typography>
          </Typography>
        </ThemeProvider>
      </Grid>
    </Box>
  );
}
