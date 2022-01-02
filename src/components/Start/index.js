import React from "react";
import { WidePictureFrame, HighPictureFrame } from "./StartElements";
import Typography from "@mui/material/Typography";
import ericsson from "../../images/spons/ericssonSpons.png";
import dggrupp from "../../images/gropies/DG_gruppbild.jpg";
import dgroupHog from "../../images/gropies/DG_gruppbild_hog.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../images/logo.png";
import FacebookIcon from "../../images/logos/FacebookLogo.png";
import InstagramIcon from "../../images/logos/InstagramLogo.png";

/* <picture>
            <source media="(min-width: 768px)" srcset={dggrupp} height={"100vh"} width={"100%"}/>
            <source media="(max-width: 768px)" srcset={dgroupHog} height={"84vh"} width={"100vw"}/>
            <img src={dgroupHog} alt="D-Group gruppbild"/>
            
            
          </picture>   */

function Start() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container>
        <Grid sm={12} /* Groupies Bild */>
          <WidePictureFrame src={dggrupp}/>
          <HighPictureFrame src={dgroupHog} height={"84vh"}/>
        </Grid>
        <Grid
          sm={12}
          sx={{ mx: 6, mb: 6, mt: 3 }}
          container /* Om oss text MED LOGO*/
        >
          <Grid sm={12} md={7}>
            <Typography
              variant="h3"
              gutterBottom
              fontWeight={"bold"}
              color={"#754022"}
            >
              {" "}
              D-Group 21/22
            </Typography>
            <Typography variant="h6" gutterButtom>
              {" "}
              Det är vi som är D-Group vilket är D-sektionens eminenta festeri.
              Vi har funnits sedan världen var svart-vit och popcorn inte gick
              att göra i micron. Innan dess låg vi i mammas kära mage och smed
              planer om världsherravälde genom pilkastning, kirhäfv och taktik
              spyor. Vi tycker om att ha kul! För att få veta mer om oss klicka
              in på Groupies sidan!
            </Typography>
          </Grid>
          <Grid sm={12} md={5} /* D-GROUP LOGO */>
            <img src={logo} alt="D-Group logo" />
          </Grid>
        </Grid>
        <Grid sm={12} /* DömD PICTURE */>
          <Typography variant="h2" color="#754022" guttomButtom>
            Våra evenemang
          </Typography>
        </Grid>
        <Grid sm={12} sx={{ mx: 6, mt: 6 }}>
          <Typography
            variant="h3"
            guttomButtom
            fontWeight={"bold"}
            color={"#E5398D"}
          >
            {" "}
            D<span STYLE="font-size:75%">ÖM</span>D
          </Typography>
          <Typography variant="h6">
            Varje vår håller vi i D-Group Datasektiones Öppna Mästerskap i Dart,
            även kallat för D<span STYLE="font-size:75%">ÖM</span>D. Precis som
            DömD är norra Europas största amatörtävling så är D
            <span STYLE="font-size:75%">ÖM</span>D den fetaste festen här på
            Liu. För mer infomation besök D<span STYLE="font-size:75%">ÖM</span>
            D{" "}
          </Typography>
        </Grid>
        <Grid container sx={{ m: 6 }} /* ANDRA FESTER */>
          <Grid sm={12} md={6} sx={{ mb: 6 }} /* Nolle-P */>
            <Typography
              variant="h4"
              guttomButtom
              color="#E5398D"
              fontWeight={"bold"}
            >
              Nollesittningen & Nollefinalen
            </Typography>
            <Typography variant="h6" guttomButtom>
              När Nolle-P lider mot sitt slut och det börjar bli dags för STABEN
              att uppgradera nollan till etta bjuder D-Group in till finfest.
              Faddrar och nollan välkomnas till sittning i sina finaste kläder
              för att njuta av god mat och underhållning. Kvällen avslutas med
              ett hejdundrande firande på Kårallen tillsammans med Maskin-, TBI-
              och Y-sektionens nyblivna ettan och faddrar.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ mb: 6 }} /* ÅvveInvigningen */>
            <Typography
              variant="h4"
              guttomButtom
              color="#E5398D"
              fontWeight={"bold"}
            >
              Åvvefix & ÅvveInvigning
            </Typography>
            <Typography variant="h6" guttomButtom>
              Då nolle-p är över och alla nya ettor har fått sina overaller
              kommer D-Group att hjälpa till att snygga till dem. Vi ser till
              att det finns färg så att man kan skriva namn och måla maskotar
              samt revärer och märken som man kan sy på. Efter att overallerna
              har blivit fulländade ska dessa traditionsenligt invigas vilket
              innebär med lekar och tokigheter tillsammans med Läxmästeriet och
              deras nya ettor.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ mb: 6 }} /* ToTK */>
            <Typography
              variant="h4"
              guttomButtom
              color="#E5398D"
              fontWeight={"bold"}
            >
              Tenta- & Omtentakravallen
            </Typography>
            <Typography variant="h6" guttomButtom>
              När höstens tenta-p äntligen är genomlidet och tankeknölarna
              värker av utmattning är det dags att släpp loss. Därför bjuder
              D-Group, tillsammans med TBI-sektionens festeri Bi6, in till fest
              två dagar i rad - nämligen Tenta- & Omtentakravallen. Då får du
              äntligen tid att fira dina avklarade tentor, alternativt fira att
              du får chansen att gråta efter tentatanterna en gång.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} /* Julfesten */>
            <Typography
              variant="h4"
              guttomButtom
              color="#E5398D"
              fontWeight={"bold"}
            >
              Julfesten
            </Typography>
            <Typography variant="h6" guttomButtom>
              Då julen är på ingång och du börjar skymta tomtar i varje hörn
              tycker D-Group att det är ett alldeles utomordentligt tillfälle
              att fira den kommande helgen med en sittning. Denna julsittning
              anordnas av D-Group och Läxmästeriet och vi lovar att vi ska vara
              så snälla vi bara kan under hösten för att locka tomten till ett
              bord nära dig.
            </Typography>
          </Grid>
        </Grid>
        <Grid sm={12} sx={{ m: 6 }} /* Våra Sponsorer*/>
          <Typography
            variant="h2"
            color="#754022"
            fontWeight={"bold"}
            sx={{ mb: 6 }}
          >
            Våra Sponsorer
          </Typography>
          <img src={ericsson} alt="Ericsson Spons" />
          <Typography varaint="h6" guttomButtom>
            Vill ni också synas här? Kontakta oss på{" "}
            <a href="mailto:spons@d-group.se!">spons@d-group.se</a>
          </Typography>
        </Grid>
        <Grid sm={12} sx={{ mb: 6 }} /* LOGS */>
          <Typography variant="h2" color="#754022" fontWeight={"bold"}>
            Följ oss gärna på våra social medier
          </Typography>
          <a href="https://instagram.com/dgroup2122/">
          <img
            src={InstagramIcon}
            alt="FB_logo"
            width={"100vw"}
            height={"100vh"}
            sx={{mx:6}}
          /></a>
          <a href="https://www.facebook.com/DGroup2021"><img
            src={FacebookIcon}
            alt="FB_logo"
            width={"100vw"}
            height={"100vh"}
          /></a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Start;
