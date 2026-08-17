import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGrid from "./Card";
import { Typography } from "@mui/material";

// import embla from "../../images/dg2425/profiler/embla.jpg";
// import emblaSmall from "../../images/dg2425/profiler/embla_426x640.jpg";
// import tessSmall from "../../images/dg2425/profiler/tess_426x640.jpg";
// import tess from "../../images/dg2425/profiler/tess.JPG";
// import isak from "../../images/dg2425/profiler/isakbig.jpg";
// import isakSmall from "../../images/dg2425/profiler/isakbig_426x640.jpg";
// import jesper from "../../images/dg2425/profiler/jesper.jpg";
// import jesperSmall from "../../images/dg2425/profiler/Jesper-4_426x640.jpg";
// import jenny from "../../images/dg2425/profiler/jenny.jpg";
// import jennySmall from "../../images/dg2425/profiler/jenny_426x640.jpg";
// import elias from "../../images/dg2425/profiler/elias.jpg";
// import eliasSmall from "../../images/dg2425/profiler/elias_426x640.jpg";
// import melker from "../../images/dg2425/profiler/melker.jpg";
// import melkerSmall from "../../images/dg2425/profiler/melker_426x640.jpg";
// import axel from "../../images/dg2425/profiler/axel.jpg";
// import axelSmall from "../../images/dg2425/profiler/axel_426x640.jpg";
// import simon from "../../images/dg2425/profiler/simon.jpg";
// import simonSmall from "../../images/dg2425/profiler/simon_426x640.jpg";
// import alma from "../../images/dg2425/profiler/Alma.jpg";
// import almaSmall from "../../images/dg2425/profiler/Alma_426x640.jpg";
// import chrille from "../../images/dg2425/profiler/chrille.jpg";
// import chrilleSmall from "../../images/dg2425/profiler/chrille_426x640.jpg";
// import jonga from "../../images/dg2425/profiler/jonga.jpg";
// import jongaSmall from "../../images/dg2425/profiler/jonga_426x640.jpg";
// import olle from "../../images/dg2425/profiler/olle.jpg";
// import olleSmall from "../../images/dg2425/profiler/olle_426x640.jpg";

// SMALL behövs typ inte men kolla in på det om du är intresserad av att optimera laddningstider
// import maxen from "../../images/dg2526/Profiler/maxmax.jpg";
// import emelie from "../../images/dg2526/Profiler/emelie.jpg";
// import klara from "../../images/dg2526/Profiler/klara.jpg";
// import olle from "../../images/dg2526/Profiler/olle.jpg";
// import hugo from "../../images/dg2526/Profiler/hugo.jpg";
// import elin from "../../images/dg2526/Profiler/elin.jpg";
// import gorbel from "../../images/dg2526/Profiler/gorbel.jpg";

// // import gorbel from "../../images/dg2526/Profiler/gorbel2.0.jpg"

// import qelb from "../../images/dg2526/Profiler/qelb.jpg";
// import becky from "../../images/dg2526/Profiler/becky.jpg";
// import jocke from "../../images/dg2526/Profiler/jocke.jpg";
// import jacob from "../../images/dg2526/Profiler/jacob.jpg";
// import kita from "../../images/dg2526/Profiler/kita.jpg";

import oliver from "../../images/dg2627/profiler/Oliver.jpg";
import nanna from "../../images/dg2627/profiler/Nanna.jpg";
import gurr from "../../images/dg2627/profiler/Gustav.jpg";
import burbel from "../../images/dg2627/profiler/Burbel.jpg";
import melle from "../../images/dg2627/profiler/Melle.jpg";
import pino from "../../images/dg2627/profiler/Pino.jpg";
import sixten from "../../images/dg2627/profiler/Sixten.jpg";
import snollo from "../../images/dg2627/profiler/Snollo.jpg";
import ines from "../../images/dg2627/profiler/Ines.jpg";
import sofie from "../../images/dg2627/profiler/Sofie.jpg";
import totte from "../../images/dg2627/profiler/Totte.jpg";
import stella from "../../images/dg2627/profiler/Stella.jpg";
import felicia from "../../images/dg2627/profiler/Fel.jpg";

/* 
Det som måste göras för att lägga tillbaka j'8 på hemsidan:
J'8 har alltid haft index 5 och ska ha det, men pga en kommenterades bort tillfälligt så ska det ändras på ett antal ställen:
1. Rad 307 ska stå Groupies[11] istället för Groupies[10]
2. Alla som har index 5 och uppåt:
<CardGrid user={Groupies[5]}>
ska ökas med +1, så de faller tillbaka på korrekt plats. Denna kommentar kan tas bort när ändringarna är gjorda. Fråga mig om du är osäker :) //Max

*/

// const FAMILYNAME = "Lü tao paœ fi guręt";
const FAMILYNAME = "J’æf ôniãts tiâïn îmitrôü wó’al";

function GroupieGrid() {
  const Groupies = [
    {
      name: "Nanna Linder",
      post: "Chief",
      image: nanna,
      smallImage: nanna,
      email: "gnart@d-group.se",
      age: "2004",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "lightweight",
    },
    {
      name: "Emelie Hedlund",
      post: "Ca$h",
      image: snollo,
      smallImage: snollo,
      email: "snollo@d-group.se",
      age: "2004",
      home: "Stockholm",
      pors: "Informationsteknologi",
      cons: "3.0‰",
    },
    {
      name: "Oliver Regnstrand",
      post: "Webb & ÖverDomaren™",
      image: oliver,
      smallImage: oliver,
      email: "oliver.regnstrand@d-group.se",
      age: "2005",
      home: "Linköping",
      pors: "Informationsteknologi",
      cons: "ragebait",
    },
    {
      name: "Jakob Klingh",
      post: "Werk",
      image: burbel,
      smallImage: burbel,
      email: "jakob.klingh@d-group.se",
      age: "2003",
      home: "Leksand",
      pors: "Datateknik",
      cons: "wasabiärtor",
    },
    {
      name: "Felicia Rogestedt",
      post: "PREvent",
      image: felicia,
      smallImage: felicia,
      email: "felicia.rogestedt@d-group.se",
      age: "2005",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "korv.",
    },
    {
      name: "Gustav Harlin",
      post: "J^9",
      image: gurr,
      smallImage: gurr,
      email: "gustav.harlin@d-group.se",
      age: "2004",
      home: "Luleå",
      pors: "Mjukvaruteknik",
      cons: "español",
    },
    {
      name: "Sixten Lundin",
      post: "Spons",
      image: sixten,
      smallImage: sixten,
      email: "sixten.lundin@d-group.se",
      age: "2005",
      home: "Stockholm",
      pors: "Informationsteknologi",
      cons: "kubbpinne...",
    },
    {
      name: "Ines Frödeberg",
      post: "Trykk",
      image: ines,
      smallImage: ines,
      email: "ines.frodeberg@d-group.se",
      age: "2005",
      home: "Stockholm",
      pors: "Mjukvaruteknik",
      cons: "dumpsterdiving",
    },
    {
      name: "Caroline Lind-Val",
      post: "Biljett & U-Lag",
      image: pino,
      smallImage: pino,
      email: "caroline.lind-val@d-group.se",
      age: "2002",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "elsparkcykel",
    },
    {
      name: "Sofie Ettling",
      post: "Mat & Sittning",
      image: sofie,
      smallImage: sofie,
      email: "sofie.ettling@d-group.se",
      age: "2005",
      home: "Vikbolandet",
      pors: "Informationsteknologi",
      cons: "lite vilse...",
    },
    {
      name: "Stella Sjöberg",
      post: "Trykk",
      image: stella,
      smallImage: stella,
      email: "stella.sjoberg@d-group.se",
      age: "2005",
      home: "Stockholm",
      pors: "Informationsteknologi",
      cons: "snusmumrik",
    },
    {
      name: "Theodor Stiebel",
      post: "Personal",
      image: totte,
      smallImage: totte,
      email: "theodor.stiebel@d-group.se",
      age: "2004",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "åh jorge",
    },
    {
      name: "Melvin Manieri",
      post: "Öl & Bar",
      image: melle,
      smallImage: melle,
      email: "melvin.manieri@d-group.se",
      age: "2003",
      home: "Malmö",
      pors: "Informationsteknologi",
      cons: "12,66 sekunder",
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
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* J^9 Card */>
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
