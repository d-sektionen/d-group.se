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
import junia480px from "../../images/gropies/profilbilder/Junia_480px.jpg";
import filip480px from "../../images/gropies/profilbilder/Filip_480px.jpg";
import daniel480px from "../../images/gropies/profilbilder/Daniel_480px.jpg";
import viktor480px from "../../images/gropies/profilbilder/Viktor_480px.jpg";
import felix480px from "../../images/gropies/profilbilder/Felix_480px.jpg";
import daneyal480px from "../../images/gropies/profilbilder/Janne_480px.jpg";
import jacob480px from "../../images/gropies/profilbilder/Jacob_480px.jpg";
import silva480px from "../../images/gropies/profilbilder/Silva_480px.jpg";
import mehmet480px from "../../images/gropies/profilbilder/Mehmet_480px.jpg";
import marcus480px from "../../images/gropies/profilbilder/Thure_480px.jpg";
import hannes480px from "../../images/gropies/profilbilder/Hannes_480px.jpg";
import amanda480px from "../../images/gropies/profilbilder/Amanda_480px.jpg";
import gustav480px from "../../images/gropies/profilbilder/Gustav_480px.jpg";

function GroupieGrid() {
  const Groupies = [
    {
      name: "Junia Mannervik",
      post: "Chief",
      image: junia,
      smallImage: junia480px,
      email: "junia.mannervik@d-group.se",
      age: "2001",
      home: "Bromma",
      pors: "Datateknik",
      cons: "Öppna kapsyler med tänderna",
    },
    {
      name: "Filip Nygren",
      post: "Ca$h",
      image: filip,
      smallImage: filip480px,
      email: "filip.nygren@d-group.se",
      age: "2000",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "Tumma ölburkar",
    },
    {
      name: "Daniel Wendin",
      post: "Webb & ÖverDomaren™",
      image: daniel,
      smallImage: daniel480px,
      email: "daniel.wendin@d-group.se",
      age: "1999",
      home: "Stockholm",
      pors: "Mjukvaruteknik",
      cons: "Hoppasäck",
    },
    {
      name: "Viktor Axén",
      post: "Werk",
      image: viktor,
      smallImage: viktor480px,
      email: "viktor.axen@d-group.se",
      age: "1999",
      home: "Ribbingebäck",
      pors: "Datateknik",
      cons: "3 öl 18 sek",
    },
    {
      name: "Felix Ramnelöv",
      post: "Pr & Event",
      image: felix,
      smallImage: felix480px,
      email: "felix.ramnelov@d-group.se",
      age: "2001",
      home: "Värmdö, Stockholm",
      pors: "Datateknik",
      cons: "Gapa stort",
    },
    {
      name: "Daneyal Abdul",
      post: "J^8",
      image: daneyal,
      smallImage: daneyal480px,
      email: "daneyal.abdul@d-group.se",
      age: "1999",
      home: "Perstorp, Skåne",
      pors: "Mjukvaruteknik",
      cons: "Kan exakt alla 91 One Direction låtar",
    },
    {
      name: "Jacob Volz",
      post: "Spons",
      image: jacob,
      smallImage: jacob480px,
      email: "jacob.volz@d-group.se",
      age: "2000",
      home: "Bromma",
      pors: "Datateknik",
      cons: "DJa på kårallen",
    },
    {
      name: "Silva Havluciyan",
      post: "Trykk",
      image: silva,
      smallImage: silva480px,
      email: "silva.havluciyan@d-group.se",
      age: "2002",
      home: "Göteborg",
      pors: "IT",
      cons: "Drifta med rullstol",
    },
    {
      name: "Mehmet Celik",
      post: "Biljett & U-Lag",
      image: mehmet,
      smallImage: mehmet480px,
      email: "mehmet.celik@d-group.se",
      age: "1999",
      home: "Täby, Stockholm",
      pors: "Datateknik",
      cons: "Klicka som delfiner",
    },
    {
      name: "Marcus Thuresson",
      post: "Mat & Sittning",
      image: marcus,
      smallImage: marcus480px,
      email: "marcus.thuresson@d-group.se",
      age: "1998",
      home: "Borås",
      pors: "Datateknik",
      cons: "Spränga Vattenmeloner",
    },
    {
      name: "Hannes Lindström",
      post: "Trykk",
      image: hannes,
      smallImage: hannes480px,
      email: "hannes.lindstrom@d-group.se",
      age: "2001",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "Heta Hannes för jag glömde skicka in mitt partytrick till Webb så nu får jag skämmas",
    },
    {
      name: "Amanda Sternberg",
      post: "Pr & Personal",
      image: amanda,
      smallImage: amanda480px,
      email: "amanda.sternberg@d-group.se",
      age: "2001",
      home: "Nynäshamn",
      pors: "IT",
      cons: "Blir aldrig bakis",
    },
    {
      name: "Gustav Bornander",
      post: "Öl & Bar",
      image: gustav,
      smallImage: gustav480px,
      email: "gustav.bornander@d-group.se",
      age: "2001",
      home: "Skillingaryd, Småland",
      pors: "Mjukvaruteknik",
      cons: "Dansa som om ingen kollar fast alla kollar",
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
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Tamara Card */>
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
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* EmmaW Card */>
          <CardGrid user={Groupies[1]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Morgan Card */>
          <CardGrid user={Groupies[12]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Marcus Card */>
          <CardGrid user={Groupies[2]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Anton Card */>
          <CardGrid user={Groupies[3]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Elias Card */>
          <CardGrid user={Groupies[8]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Axel Card */>
          <CardGrid user={Groupies[4]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Shamil Card */>
          <CardGrid user={Groupies[5]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Alice Card */>
          <CardGrid user={Groupies[6]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* EmmaS Card */>
          <CardGrid user={Groupies[7]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Oscar Card */>
          <CardGrid user={Groupies[9]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Erik Card */>
          <CardGrid user={Groupies[10]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Johan Card */>
          <CardGrid user={Groupies[11]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GroupieGrid;
