import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Contact() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container>
        <Grid sm={12} /* Digital kontakt */>
          <Typography variant="h2" guttomButtom>
            Kontakt
          </Typography>
          <Typography variant="h4" guttomButtom>
            Vid allmäna frågor, strippförfrågningar,jobbförfrågningar (vi kan jobba på det mesta) görs via mail till <a href="mailto:info@d-group.se">info@d-group.se</a> 
          </Typography>
          <Typography variant="h2" guttomButtom>
              Vid postspecifika frågor gäller kontaka den nedanför som bäst passar.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
