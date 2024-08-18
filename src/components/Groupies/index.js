import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGrid from "./Card";
import { Typography } from "@mui/material";
import disa from "../../images/gropies/profilbilder/Disa_1080px.jpg";
import dan from "../../images/gropies/profilbilder/Dan_1080px.jpg";
import marc from "../../images/gropies/profilbilder/Marc_1080px.jpg";
import linus from "../../images/gropies/profilbilder/Linus_1080px.jpg";
import elliot from "../../images/gropies/profilbilder/Elliot_1080px.jpg";
import edgar from "../../images/gropies/profilbilder/Edgar_1080px.jpg";
import manfred from "../../images/gropies/profilbilder/Manfred_1080px.jpg";
import emma from "../../images/gropies/profilbilder/Emma_1080px.jpg";
import mateo from "../../images/gropies/profilbilder/Mateo_1080px.jpg";
import hugo from "../../images/gropies/profilbilder/Hugo_1080px.jpg";
import simon from "../../images/gropies/profilbilder/Simon_1080px.jpg";
import eleanor from "../../images/gropies/profilbilder/Eleanor_1080px.jpg";
import adam from "../../images/gropies/profilbilder/Adam_1080px.jpg";
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

import tessSmall from "../../images/dg2425/profiler/tess_426x640.jpg";
import tess from "../../images/dg2425/profiler/tess.JPG";

const FAMILYNAME = "Lü tao paœ fi guręt";

function GroupieGrid() {
  const Groupies = [
    {
      name: "Tess Larsson",
      post: "Chief",
      image: tess,
      smallImage: tessSmall,
      email: "malk@d-group.se",
      age: "2002",
      home: "Tyringö",
      pors: "Mjukvaruteknik",
      cons: "",
    },
    {
      name: "Simon Andersson",
      post: "Ca$h",
      image: "",
      smallImage: "",
      email: "aidy@d-group.se",
      age: "2003",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "",
    },
    {
      name: "Axel Glöckner",
      post: "Webb & ÖverDomaren™",
      image: "",
      smallImage: "",
      email: "axel.glockner@d-group.se",
      age: "2000",
      home: "Karlskoga",
      pors: "Informationsteknologi",
      cons: "",
    },
    {
      name: "Christopher Åsberg",
      post: "Werk",
      image: "",
      smallImage: "",
      email: "christopher.asberg@d-group.se",
      age: "2003",
      home: "Linköping",
      pors: "Mjukvaruteknik",
      cons: "",
    },
    {
      name: "Isak Song Olsson",
      post: "Pr & Event",
      image: "",
      smallImage: "",
      email: "isak.song.olsson@d-group.se",
      age: "2002",
      home: "Läjet",
      pors: "Datateknik",
      cons: "",
    },
    {
      name: "Jonathan Gårdheim",
      post: "J^8",
      image: "",
      smallImage: "",
      email: "jonathan.gardheim@d-group.se",
      age: "2002",
      home: "Stockholm",
      pors: "Informationsteknologi",
      cons: "",
    },
    {
      name: "Elias Forsell",
      post: "Spons",
      image: "",
      smallImage: "",
      email: "elias.forsell@d-group.se",
      age: "2002",
      home: "Huvudstaden",
      pors: "Informationsteknologi",
      cons: "",
    },
    {
      name: "Alma Mateo Johansson",
      post: "Trykk",
      image: "",
      smallImage: "",
      email: "alma.mateo.johansson@d-group.se",
      age: "2003",
      home: "Linköping",
      pors: "Informationsteknologi",
      cons: "",
    },
    {
      name: "Jesper Worbel",
      post: "Biljett & U-Lag",
      image: "",
      smallImage: "",
      email: "jesper.wrobel@d-group.se",
      age: "2003",
      home: "Karlskrona",
      pors: "Informationsteknologi",
      cons: "",
    },
    {
      name: "Jenny Andersson",
      post: "Mat & Sittning",
      image: "",
      smallImage: "",
      email: "jenny.andersson@d-group.se",
      age: "2004",
      home: "Stockholm",
      pors: "Mjukvaruteknik",
      cons: "",
    },
    {
      name: "Melker Forsell",
      post: "Trykk",
      image: "",
      smallImage: "",
      email: "melker.forsell@d-group.se",
      age: "2003",
      home: "Stockholm",
      pors: "Informationsteknologi",
      cons: "",
    },
    {
      name: "Embla Olin",
      post: "Pr & Personal",
      image: "",
      smallImage: "",
      email: "embla.olin@d-group.se",
      age: "2002",
      home: "Skåne",
      pors: "Datateknik",
      cons: "",
    },
    {
      name: "Olle Håkansson",
      post: "Öl & Bar",
      image: "",
      smallImage: "",
      email: "olle.hakansson@d-group.se",
      age: "2001",
      home: "Norrland",
      pors: "Informationsteknologi",
      cons: "",
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
              Tjena Tjena! Vi är familjen {FAMILYNAME}, för att veta mer om en
              specifik medlem är det bara att klicka på bilden!
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
            Tjena Tjena! Vi är familjen {FAMILYNAME}, för att veta mer om en
            specifik medlem är det bara att klicka på bilden!
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
        <Grid
          xs={12}
          md={4}
          sx={{ p: { xs: 1, md: 2 } }} /* Pr & Personal Card */
        >
          <CardGrid user={Groupies[11]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GroupieGrid;
