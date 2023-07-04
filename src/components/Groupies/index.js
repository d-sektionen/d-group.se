import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGrid from "./Card";
import { Typography } from "@mui/material";
<<<<<<< HEAD
=======
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
>>>>>>> master

function GroupieGrid() {
  const Groupies = [
    {
<<<<<<< HEAD
      name: "Tamara Jurić",
      post: "Chief",
      image: "https://i.imgur.com/9QCprnd.jpg",
      email: "tamara.juric@d-group.se",
      age: "1997",
      home: "Linköööping",
      pors: "Boss Bitch",
      cons: "Barer med öl i",
      relation: "Nunna",
      party: "Fingra folk oralt",
    },
    {
      name: "Emma Wahlund",
      post: "Ca$h",
      image: "https://i.imgur.com/3Vrvgj6.jpg",
      email: "emma.wahlund@d-group.se",
      age: "1998",
      home: "Sigtuna",
      pors: "Literal icon",
      cons: "Starksprit med vatten, baksmällans gudmor",
      relation: "Nunna",
      party: "Erfaren",
    },
    {
      name: "Marcus Döberl",
      post: "Webb & ÖverDomaren™",
      image: "https://i.imgur.com/SGHNmjK.jpg",
      email: "marcus.doberl@d-group.se",
      age: "2000",
      home: "Östermalm",
      pors: "Däckar aldrig",
      cons: "Jobbrealtioner",
      relation: "Nunna",
      party: "Pingis boll",
    },
    {
      name: "Anton Bergman",
      post: "Werk",
      image: "https://i.imgur.com/QcsoV4W.jpg",
      email: "anton.bergman@d-group.se",
      age: "2000",
      home: "Hudängen",
      pors: "Duschbowling",
      cons: "Mobbar Hemsidor",
      relation: "Nunna",
      party: "Rulla magen",
    },
    {
      name: "Axel Peters",
      post: "Pr & Event",
      image: "https://i.imgur.com/QpUTpSB.jpg",
      email: "axel.peters@d-group.se",
      age: "2000",
      home: "Norrtälje",
      pors: "Stripp, Mankini(monster), Slak",
      cons: "Skyltar, Ölglas, Slak",
      relation: "Nunna",
      party: "Stoppa stora objekt i min mun",
    },
    {
      name: "Shamil Limbasiya",
      post: "J^8",
      image: "https://i.imgur.com/jVaoGVn.jpg",
      email: "shamil.limbasiya@d-group.se",
      age: "2001",
      home: "Väster om viken",
      pors: "Sover aldrig",
      cons: "Oddsar",
      relation: "Nunna",
      party: "Oddsar",
    },
    {
      name: "Alice Bramstedt",
      post: "Spons",
      image: "https://i.imgur.com/DvwMyRa.jpg",
      email: "alice.bramstedt@d-group.se",
      age: "1999",
      home: "Okänt",
      pors: "Prata engelska",
      cons: "Prata Svenska",
      relation: "Nunna",
      party: "Prata engelska",
    },
    {
      name: "Emma Siklosi",
      post: "Trykk",
      image: "https://i.imgur.com/A1hN172.jpg",
      email: "emma.siklosi@d-group.se",
      age: "2000",
      home: "TätBy",
      pors: "Queen of Lyft",
      cons: "Alkohol",
      relation: "Nunna",
      party: "Snapchat Vloggar",
    },
    {
      name: "Elias Hörnberg",
      post: "Biljett & U-Lag",
      image: "https://i.imgur.com/wAEKWn2.jpg",
      email: "elias.hornberg@d-group.se",
      age: "2000",
      home: "Sollentuna",
      pors: "Mobba Öl o Bar",
      cons: "Gasquen pissoraren och biljettsläpp",
      relation: "Nunna",
      party: "Snacka tyska",
    },
    {
      name: "Oscar Stolpe",
      post: "Mat & Sittning",
      image: "https://i.imgur.com/xWSoQBM.jpg",
      email: "oscar.stolpe@d-group.se",
      age: "2000",
      home: "Sollentuunaa",
      pors: "röd bil, laga mat näck",
      cons: "Behålla mat i matlådan",
      relation: "inverse nunna",
      party: "",
    },
    {
      name: "Erik Hilke",
      post: "Trykk",
      image: "https://i.imgur.com/sFY2TtE.jpg",
      email: "erik.hilke@d-group.se",
      age: "2001",
      home: "Älvsjö",
      pors: "Chiwawa",
      cons: "Solbrännor",
      relation: "Super singel",
      party:
        "införskaffa strumpor, balkonghäng, ge stripp på fyllan och Pitt eller Pung",
    },
    {
      name: "Johan Sjöstedt",
      post: "Pr & Personal",
      image: "https://i.imgur.com/nHiwZiO.jpg",
      email: "johan.sjostedt@d-group.se",
      age: "1994",
      home: "Nackais",
      pors: "Röstat i flest riksdagsval",
      cons: "Shotta",
      relation: "Nunna",
      party: "Stoldansen B-)",
    },
    {
      name: "Morgan Uvelid",
      post: "Öl & Bar",
      image: "https://i.imgur.com/SfjntgL.jpg",
      email: "morgan.uvelid@d-group.se",
      age: "1997",
      home: "Täbyyyy",
      pors: "------ >",
      cons: "plugga",
      relation: "Nunna",
      party: "Tappar minnet efter två enheter",
=======
      name: "Junia Mannervik",
      post: "Chief",
      image: junia,
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
      email: "gustav.bornander@d-group.se",
      age: "2001",
      home: "Skillingaryd, Småland",
      pors: "Mjukvaruteknik",
      cons: "Dansa som om ingen kollar fast alla kollar",
>>>>>>> master
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
<<<<<<< HEAD
              Tjena Tjena! Vi är familjen Chláirs oüf Phróplîexios, för att veta
              mer om en specifik medlem är det bara att klicka på bilden!
=======
              Tjena Tjena! Vi är familjen Coulêk tïv néiçúde, för att veta mer
              om en specifik medlem är det bara att klicka på bilden!
>>>>>>> master
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
<<<<<<< HEAD
            Tjena Tjena! Vi är familjen Chláirs oüf Phróplîexios, för att veta
            mer om en specifik medlem är det bara att klicka på bilden!
=======
            Tjena Tjena! Vi är familjen Coulêk tïv néiçúde, för att veta mer om
            en specifik medlem är det bara att klicka på bilden!
>>>>>>> master
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
