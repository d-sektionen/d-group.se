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
import maxen from "../../images/dg2526/Profiler/maxmax.jpg"
import emelie from "../../images/dg2526/Profiler/emelie.jpg"
import klara from "../../images/dg2526/Profiler/klara.jpg"
import olle from "../../images/dg2526/Profiler/olle.jpg"
import hugo from "../../images/dg2526/Profiler/hugo.jpg"
import elin from "../../images/dg2526/Profiler/elin.jpg"
import gorbel from "../../images/dg2526/Profiler/gorbel.jpg"

// import gorbel from "../../images/dg2526/Profiler/gorbel2.0.jpg"


import qelb from "../../images/dg2526/Profiler/qelb.jpg"
import becky from "../../images/dg2526/Profiler/becky.jpg"
import jocke from "../../images/dg2526/Profiler/jocke.jpg"
import jacob from "../../images/dg2526/Profiler/jacob.jpg"
import kita from "../../images/dg2526/Profiler/kita.jpg"


/* 
Det som måste göras för att lägga tillbaka j'8 på hemsidan:
J'8 har alltid haft index 5 och ska ha det, men pga en kommenterades bort tillfälligt så ska det ändras på ett antal ställen:
1. Rad 307 ska stå Groupies[11] istället för Groupies[10]
2. Alla som har index 5 och uppåt:
<CardGrid user={Groupies[5]}>
ska ökas med +1, så de faller tillbaka på korrekt plats. Denna kommentar kan tas bort när ändringarna är gjorda. Fråga mig om du är osäker :) //Max

*/ 


// const FAMILYNAME = "Lü tao paœ fi guręt";
const FAMILYNAME = "Læi gündán iôm bün çsteîna"


function GroupieGrid() {
  const Groupies = [
    {
      name: "Charlotte Nestler",
      post: "Chief",
      image: kita,
      smallImage: kita,
      email: "kita@d-group.se",
      age: "2004",
      home: "Falun",
      pors: "Datateknik",
      cons: "blub blub",
    },
    {
      name: "Nils Modig",
      post: "Ca$h",
      image: qelb,
      smallImage: qelb,
      email: "qelb@d-group.se",
      age: "2003",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "BB114",
    },
    {
      name: "Max Eriksson",
      post: "Webb & ÖverDomaren™",
      image: maxen,
      smallImage: maxen,
      email: "max.eriksson@d-group.se",
      age: "2001",
      home: "Stallarholmen",
      pors: "Mjukvaruteknik",
      cons: "sten",
    },
    {
      name: "Kevin Larsson",
      post: "Werk",
      image: gorbel,
      smallImage: gorbel,
      email: "kevin.larsson@d-group.se",
      age: "2002",
      home: "Västerås",
      pors: "Innovativ programmering",
      cons: "celibat",
    },
    {
      name: "Joakim Centervall",
      post: "Pr & Event",
      image: jocke,
      smallImage: jocke,
      email: "joakim.centervall@d-group.se",
      age: "2003",
      home: "Stockholm",
      pors: "Informationsteknologi",
      cons: "slipsfredag",
    },
    // {
    //   name: "Din mamma",
    //   post: "J^8",
    //   image: din mamma,
    //   smallImage: din mamma,
    //   email: "din.mamma@d-group.se",
    //   age: "ingen vet",
    //   home: "skyttet",
    //   pors: "Datateknik",
    //   cons: "hon lirar bara bangers",
    // },
    {
      name: "Emelie Nordeskog",
      post: "Spons",
      image: emelie,
      smallImage: emelie,
      email: "emelie.nordeskog@d-group.se",
      age: "2004",
      home: "Västerås",
      pors: "Informationsteknologi",
      cons: "Lantis",
    },
    {
      name: "Elin Roos",
      post: "Trykk",
      image: elin,
      smallImage: elin,
      email: "elin.roos@d-group.se",
      age: "2004",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "buffé",
    },
    {
      name: "Klara Ambrosiani",
      post: "Biljett & U-Lag",
      image: klara,
      smallImage: klara,
      email: "klara.ambrosiani@d-group.se",
      age: "2005",
      home: "Vimseby",
      pors: "Informationsteknologi",
      cons: "helga olivia",
    },
    {
      name: "Rebecka Smids",
      post: "Mat & Sittning",
      image: becky,
      smallImage: becky,
      email: "rebecka.smids@d-group.se",
      age: "2003",
      home: "Mora",
      pors: "Informationsteknologi",
      cons: "cockblock",
    },
    {
      name: "Hugo Staaff",
      post: "Trykk",
      image: hugo,
      smallImage: hugo,
      email: "hugo.staaff@d-group.se",
      age: "2001",
      home: "Stockholm",
      pors: "Datateknik",
      cons: "farfar",
    },
    {
      name: "Olle Morberg",
      post: "Pr & Personal",
      image: olle,
      smallImage: olle,
      email: "olle.morberg@d-group.se",
      age: "2003",
      home: "Lund",
      pors: "Datateknik",
      cons: "hmm, chips t",
    },
    {
      name: "Jacob Ranebjer",
      post: "Öl & Bar",
      image: jacob,
      smallImage: jacob,
      email: "jacob.ranebjer@d-group.se",
      age: "2001",
      home: "Malmö",
      pors: "Mjukvaruteknik",
      cons: "blå",
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
          <CardGrid user={Groupies[11]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Webb Card */>
          <CardGrid user={Groupies[2]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Werk Card */>
          <CardGrid user={Groupies[3]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Ticket Card */>
          <CardGrid user={Groupies[7]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Pr & Event Card */>
          <CardGrid user={Groupies[4]} />
        {/* </Grid> */}
        {/* <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} >
          <CardGrid user={Groupies[5]} /> */}
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Sponsor Card */>
          <CardGrid user={Groupies[5]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Trykk Card */>
          <CardGrid user={Groupies[6]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* MoS Card */>
          <CardGrid user={Groupies[8]} />
        </Grid>
        <Grid xs={12} md={4} sx={{ p: { xs: 1, md: 2 } }} /* Trykk Card */>
          <CardGrid user={Groupies[9]} />
        </Grid>
        <Grid
          xs={12}
          md={4}
          sx={{ p: { xs: 1, md: 2 } }} /* Pr & Personal Card */
        >
          <CardGrid user={Groupies[10]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GroupieGrid;


