import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGrid from "./Card";
import { Typography } from "@mui/material";
import disa from "../../images/gropies/profilbilder/Disa.jpg";
import dan from "../../images/gropies/profilbilder/Dan.jpg";
import marc from "../../images/gropies/profilbilder/Marc.jpg";
import linus from "../../images/gropies/profilbilder/Linus.jpg";
import elliot from "../../images/gropies/profilbilder/Elliot.jpg";
import edgar from "../../images/gropies/profilbilder/Edgar.jpg";
import manfred from "../../images/gropies/profilbilder/Manfred.jpg";
import emma from "../../images/gropies/profilbilder/Emma.jpg";
import mateo from "../../images/gropies/profilbilder/Mateo.jpg";
import hugo from "../../images/gropies/profilbilder/Hugo.jpg";
import simon from "../../images/gropies/profilbilder/Simon.jpg";
import eleanor from "../../images/gropies/profilbilder/Eleanor.jpg";
import adam from "../../images/gropies/profilbilder/Adam.jpg";
import disa480px from "../../images/gropies/profilbilder/Disa_480px.jpg";
import dan480px from "../../images/gropies/profilbilder/Dan_480px.jpg";
import marc480px from "../../images/gropies/profilbilder/Marc_480px.jpg";
import linus480px from "../../images/gropies/profilbilder/Linus_480px.jpg";
import elliot480px from "../../images/gropies/profilbilder/Elliot_480px.jpg";
import edgar480px from "../../images/gropies/profilbilder/Edgar_480px.jpg";
import manfred480px from "../../images/gropies/profilbilder/Manfred_480px.jpg";
import emma480px from "../../images/gropies/profilbilder/Emma_480px.jpg";
import mateo480px from "../../images/gropies/profilbilder/Mateo_480px.jpg";
import hugo480px from "../../images/gropies/profilbilder/Hugo_480px.jpg";
import simon480px from "../../images/gropies/profilbilder/Simon_480px.jpg";
import eleanor480px from "../../images/gropies/profilbilder/Eleanor_480px.jpg";
import adam480px from "../../images/gropies/profilbilder/Adam_480px.jpg";

function GroupieGrid() {
  const Groupies = [
    {
      name: "Disa Kärnbring",
      post: "Chief",
      image: disa,
      smallImage: disa480px,
      email: "q@d-group.se",
      age: "2000",
      home: "Huskvarna",
      pors: "Datateknik",
      cons: "Tre cider",
    },
    {
      name: "Dan Suleiman",
      post: "Ca$h",
      image: dan,
      smallImage: dan480px,
      email: "ken@d-group.se",
      age: "2002",
      home: "Gävle/Stockholm",
      pors: "Mjukvaruteknik",
      cons: "Hitta en toa",
    },
    {
      name: "Marc Taylor",
      post: "Webb & ÖverDomaren™",
      image: marc,
      smallImage: marc480px,
      email: "marc.taylor@d-group.se",
      age: "2001",
      home: "Stockholm",
      pors: "Mjukvaruteknik",
      cons: "Aldrig nekad",
    },
    {
      name: "Linus Göransson",
      post: "Werk",
      image: linus,
      smallImage: linus480px,
      email: "linus.goransson@d-group.se",
      age: "1999",
      home: "Färila",
      pors: "IP",
      cons: "3 öl 13 sek",
    },
    {
      name: "Elliot Eriksson",
      post: "Pr & Event",
      image: elliot,
      smallImage: elliot480px,
      email: "elliot.eriksson@d-group.se",
      age: "2002",
      home: "Bromma, Stockholm",
      pors: "Datateknik",
      cons: "Symaskinsnålar",
    },
    {
      name: "Hugo Jakobsson",
      post: "J^8",
      image: edgar,
      smallImage: edgar480px,
      email: "hugo.jakobsson@d-group.se",
      age: "2002",
      home: "Skauneeeee",
      pors: "Datateknik",
      cons: "Vara FULL",
    },
    {
      name: "Manfred Clase",
      post: "Spons",
      image: manfred,
      smallImage: manfred480px,
      email: "manfred.clase@d-group.se",
      age: "2001",
      home: "Huvudstaden",
      pors: "Datateknik",
      cons: "ADHD",
    },
    {
      name: "Emma Bertmar",
      post: "Trykk",
      image: emma,
      smallImage: emma480px,
      email: "emma.bertmar@d-group.se",
      age: "2002",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "Arboga 10,2",
    },
    {
      name: "Mateo Schütt Zalabardo",
      post: "Biljett & U-Lag",
      image: mateo,
      smallImage: mateo480px,
      email: "mateo.zalabardo@d-group.se",
      age: "2001",
      home: "Eskilstuna",
      pors: "Mjukvaruteknik",
      cons: "Gillar älg öl",
    },
    {
      name: "Hugo Nilsson",
      post: "Mat & Sittning",
      image: hugo,
      smallImage: hugo480px,
      email: "hugo.nilsson@d-group.se",
      age: "2000",
      home: "Helsingborg",
      pors: "Datateknik",
      cons: "Trolla bort groggar väldigt snabbt.",
    },
    {
      name: "Simon Harrysson",
      post: "Trykk",
      image: simon,
      smallImage: simon480px,
      email: "simon.harrysson@d-group.se",
      age: "2002",
      home: "Lidingö, Stockholm",
      pors: "Datateknik",
      cons: "Sossar groggar från Edgar",
    },
    {
      name: "Eleanor Brunskog",
      post: "Pr & Personal",
      image: eleanor,
      smallImage: eleanor480px,
      email: "eleanor.brunskog@d-group.se",
      age: "2001",
      home: "Stockholm",
      pors: "IT",
      cons: "Tre cider",
    },
    {
      name: "Adam Rylander",
      post: "Öl & Bar",
      image: adam,
      smallImage: adam480px,
      email: "adam.rylander@d-group.se",
      age: "2001",
      home: "Åkersberga",
      pors: "IT",
      cons: "Välta barer",
    },
  ];

  return (
    <Box sx={{ mt: 10, textAlign: "center", overflowX: "hidden" }}>
      <Grid container>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* About card */>
          <Grid
            sx={{
              display: { xs: "none", md: "inline" },
            }} /* Om D-group försvinner på liten skärm */
          >
            <Typography
              variant="h2"
              guttomButtom
              fontWeight={"bold"}
              color={"#E5398D"}
            >
              Om D-Group
            </Typography>
            <Typography variant="h6" guttomButtom>
              D-Group är D-sektionens eminenta festeri. Vi har funnits sedan
              världen var svart-vit och popcorn inte gick att göra i micron.
              Innan dess låg vi i mammas kära mage och smed planer om
              världsherravälde genom pilkastning, ölhäfv och självrökande
              cigaretter. Vi tycker om att ha kul!
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: { xs: "inline", md: "none" },
            }} /* Vilka är vi syns på liten skräm */
          >
            <Typography
              variant="h2"
              guttomButtom
              fontWeight={"bold"}
              color={"#E5398D"}
            >
              Vilka är vi?
            </Typography>
            <Typography variant="h6" guttomButtom>
              Tjena Tjena! Vi är familjen Nãu Knaëi Fàurãęn, för att veta mer
              om en specifik medlem är det bara att klicka på bilden!
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Chief Card */>
          <CardGrid user={Groupies[0]} />
        </Grid>
        <Grid
          xs={12}
          md={4}
          sx={{
            p: { xs: 1, md: 2 },
            display: { xs: "none", md: "inline" },
          }} /* Click about Card  förvvinner på liten skräm*/
        >
          <Typography
            variant="h2"
            guttomButtom
            fontWeight={"bold"}
            color={"#E5398D"}
          >
            Vilka är vi?
          </Typography>
          <Typography variant="h6" guttomButtom>
            Tjena Tjena! Vi är familjen Coulêk tïv néiçúde, för att veta mer om
            en specifik medlem är det bara att klicka på bilden!
          </Typography>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Cash Card */>
          <CardGrid user={Groupies[1]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Bar Card */>
          <CardGrid user={Groupies[12]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Webb Card */>
          <CardGrid user={Groupies[2]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Werk Card */>
          <CardGrid user={Groupies[3]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Ticket Card */>
          <CardGrid user={Groupies[8]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Pr & Event Card */>
          <CardGrid user={Groupies[4]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* J⁸ Card */>
          <CardGrid user={Groupies[5]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Sponsor Card */>
          <CardGrid user={Groupies[6]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Trykk Card */>
          <CardGrid user={Groupies[7]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* MoS Card */>
          <CardGrid user={Groupies[9]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Trykk Card */>
          <CardGrid user={Groupies[10]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Pr & Personal Card */>
          <CardGrid user={Groupies[11]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GroupieGrid;
