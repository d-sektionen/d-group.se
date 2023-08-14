import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGrid from "./Card";
import { Typography } from "@mui/material";
import junia from "../../images/gropies/profilbilder/Junia.jpg";
import filip from "../../images/gropies/profilbilder/Filip.jpg";
import daniel from "../../images/gropies/profilbilder/Daniel.jpg";
import viktor from "../../images/gropies/profilbilder/Viktor.jpg";
import felix from "../../images/gropies/profilbilder/Felix.jpg";
import daneyal from "../../images/gropies/profilbilder/Janne.jpg";
import jacob from "../../images/gropies/profilbilder/Jacob.jpg";
import silva from "../../images/gropies/profilbilder/Silva.jpg";
import mehmet from "../../images/gropies/profilbilder/Mehmet.jpg";
import marcus from "../../images/gropies/profilbilder/Thure.jpg";
import hannes from "../../images/gropies/profilbilder/Hannes.jpg";
import amanda from "../../images/gropies/profilbilder/Amanda.jpg";
import gustav from "../../images/gropies/profilbilder/Gustav.jpg";

function GroupieGrid() {
  const Groupies = [
    {
      name: "Disa Kärnbring",
      post: "Chief",
      image: junia,
      email: "q@d-group.se",
      age: "2000",
      home: "Huskvarna",
      pors: "Datateknik",
      cons: "Tre cider",
    },
    {
      name: "Dan Suleiman",
      post: "Ca$h",
      image: filip,
      email: "ken@d-group.se",
      age: "2002",
      home: "Gävle/Stockholm",
      pors: "Mjukvaruteknik",
      cons: "Hitta en toa",
    },
    {
      name: "Marc Taylor",
      post: "Webb & ÖverDomaren™",
      image: daniel,
      email: "marc.taylor@d-group.se",
      age: "2001",
      home: "Stockholm",
      pors: "Mjukvaruteknik",
      cons: "Aldrig nekad",
    },
    {
      name: "Linus Göransson",
      post: "Werk",
      image: viktor,
      email: "linus.goransson@d-group.se",
      age: "1999",
      home: "Färila",
      pors: "IP",
      cons: "3 öl 13 sek",
    },
    {
      name: "Elliot Eriksson",
      post: "Pr & Event",
      image: felix,
      email: "elliot.eriksson@d-group.se",
      age: "2002",
      home: "Bromma, Stockholm",
      pors: "Datateknik",
      cons: "Symaskinsnålar",
    },
    {
      name: "Hugo Jakobsson",
      post: "J^8",
      image: daneyal,
      email: "hugo.jakobsson@d-group.se",
      age: "2001",
      home: "Skauneeeee",
      pors: "Datateknik",
      cons: "Vara FULL",
    },
    {
      name: "Manfred Clase",
      post: "Spons",
      image: jacob,
      email: "manfred.clase@d-group.se",
      age: "2000",
      home: "Huvudstaden",
      pors: "Datateknik",
      cons: "ADHD",
    },
    {
      name: "Emma Bertmar",
      post: "Trykk",
      image: silva,
      email: "emma.bertmar@d-group.se",
      age: "2002",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "Arboga 10,2",
    },
    {
      name: "Mateo Schütt Zalabardo",
      post: "Biljett & U-Lag",
      image: mehmet,
      email: "mateo.zalabardo@d-group.se",
      age: "2001",
      home: "Eskilstuna",
      pors: "Mjukvaruteknik",
      cons: "Gillar älg öl",
    },
    {
      name: "Hugo Nilsson",
      post: "Mat & Sittning",
      image: marcus,
      email: "hugo.nilsson@d-group.se",
      age: "2000",
      home: "Helsingborg",
      pors: "Datateknik",
      cons: "Trolla bort groggar väldigt snabbt.",
    },
    {
      name: "Simon Harrysson",
      post: "Trykk",
      image: hannes,
      email: "simon.harrysson@d-group.se",
      age: "2001",
      home: "Lidingö, Stockholm",
      pors: "Datateknik",
      cons: "Sossar groggar från Edgar",
    },
    {
      name: "Eleanor Brunskog",
      post: "Pr & Personal",
      image: amanda,
      email: "eleanor.brunskog@d-group.se",
      age: "2001",
      home: "Stockholm",
      pors: "IT",
      cons: "Tre cider",
    },
    {
      name: "Adam Rylander",
      post: "Öl & Bar",
      image: gustav,
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
              Tjena Tjena! Vi är familjen Coulêk tïv néiçúde, för att veta mer
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
