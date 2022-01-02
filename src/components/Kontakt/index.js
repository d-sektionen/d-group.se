import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Contact() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Grid container>
        <Grid xs={12} /* HEADER */>
          <Typography variant="h1" guttomButtom color="#754022">
            Kontakt
          </Typography>
        </Grid>

        <Grid sm={12} md={6} sx={{ p: 6 }} /* POST KONTAKT */>
          <Typography variant="h4" guttomButtom paragraph color="#E5398D">
            Post specifik kontakt
          </Typography>
          <Typography variant="h6" guttomButtom paragraph>
            
            Cheif, Tamara:{" "}
            <Link href="mailto:Chief@d-group.se">Chief@d-group.se</Link> <br />
            Vid PR frågor: <Link href="mailto:pr@d-group.se">Pr@d-group.se</Link> <br />
            Vid Personal frågor: <Link href="mailto:personal@d-group.se">Personal@d-group.se</Link> <br />
            Vid penga frågor: <Link href="mailto:cash@d-group.se">Cash@d-group.se</Link> <br />
            Vid Webb fårgor: <Link href="mailto:webb@d-group.se">Webb@d-group.se</Link> <br />
            Vid DömD/DimD frågor: <Link href="mailto:dart@d-group.se">Dart@d-group.se</Link> <br />
            Vid biljett/Lag frågor <Link href="mailto:biljett@d-group.se">Biljett@d-group.se</Link> <br />
            Vid Ljud o Ljus frågor <Link href="mailto:j8@d-group.se">J8@d-group.se</Link> <br />
            Vid Trykk frågor <Link href="mailto:trykk@d-group.se">Trykk@d-group.se</Link> <br />
            Vid Sittnings/Mat frågor <Link href="mailto:mat@d-group.se">Mat@d-group.se</Link> <br />
            Vid Transport frågor <Link href="mailto:werk@d-group.se">Werk@d-group.se</Link> <br />
            Vid Öl o Bar frågor <Link href="mailto:olbar@d-group.se">Olbar@d-group.se</Link> <br />
            Vid kontakt till en specifik groupie se{" "}
            <Link href="/groupies">groupie sidan</Link> <br />
          </Typography>
        </Grid>

        <Grid sm={12} md={6} sx={{ p: 6 }} /* Allmän kontakt + analog */>
          <Typography variant="h4" guttomButtom paragraph color="#E5398D">
            Allmän kontakt
          </Typography>
          <Typography variant="h6" guttomButtom>
            Vid allmäna frågor, strippförfrågningar, jobbförfrågningar (vi kan
            jobba på det mesta) eller om du är osäker på vem du ska kontakta skicka ett mail till{" "}
            <a href="mailto:info@d-group.se">info@d-group.se</a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
