import React from "react";
import { WidePictureFrame, HighPictureFrame } from "./StartElements";
import Typography from "@mui/material/Typography";
import ericsson from "../../images/spons/ericssonSpons.webp";
import microtec from "../../images/spons/microtec.png";
import Ida from "../../images/spons/idainfrontSpons.webp";
import xamera from "../../images/spons/xameraSpons.webp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import logo from "../../images/logo.webp";
import { Slideshow } from "./DgSlideshow";
import dggrupp from "../../images/gropies/dgroup2324.jpg";
import dggrupp1200px from "../../images/gropies/dgroup2324_landscape.jpg"
import dgroupHog from "../../images/gropies/22_23_formation.jpg";

/* <picture>
            <source media="(min-width: 768px)" srcset={dggrupp} height={"100vh"} width={"100%"}/>
            <source media="(max-width: 768px)" srcset={dgroupHog} height={"84vh"} width={"100vw"}/>
            <img src={dgroupHog} alt="D-Group gruppbild"/>
            
            
          </picture>   */

function Start() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container>
        <Grid sm={12} sx={{ pt: 9 }} /* Groupies Bild */>
          <WidePictureFrame src={dggrupp1200px} />
          <HighPictureFrame src={dggrupp} />
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
              D-Group 23/24
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
          <Grid sm={12} md={5} sx={{ pt: 6, mx:'auto' }} /* D-GROUP LOGO */>
            <img src={logo} alt="D-Group logo" />
          </Grid>
        </Grid>
        <Grid sm={12} /* DömD PICTURE */>
          <Typography variant="h2" color="#754022" guttomButtom>
            Våra evenemang
          </Typography>
        </Grid>
        <Grid sm={12} md={6} sx={{ px: 6, mt: 6 }} /* DÖmD */>
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
            Den 11e april slås dörrarna upp till årets bästa fest, D
            <span STYLE="font-size:75%">ÖM</span>
            D! Datateknologsektionens Öppna Mästerskap i Dart är en av norra
            Europas största darttävlingar som arrangeras för 43:e året i rad.
            Festen som pågår i tre dagar och börjar med kravall på torsdagen,
            fortsätter med fest på fredagen och avslutas med tävling, sittning
            och eftersläpp på lördagen. Denna fest får inte missas så boka in
            datumen redan nu! För mer infomaton besök{" "}
            <Link
              href="http://domd.nu"
              underlink="hover"
              color="#E5398D"
              sx={{ textDecoration: "none" }}
            >
              D<span STYLE="font-size:75%">ÖM</span>D.nu
            </Link>
          </Typography>
        </Grid>
        <Grid sm={12} md={6} sx={{ px: 6, mt: 6 }} /* DIMD */>
          <Typography
            variant="h3"
            guttomButtom
            fontWeight={"bold"}
            color={"#E5398D"}
          >
            {" "}
            D<span STYLE="font-size:75%">IM</span>D
          </Typography>
          <Typography variant="h6">
            Kliar det i kastarmen? Tycker du att det är lite för långt mellan D
            <span STYLE="font-size:75%">ÖM</span>D och D
            <span STYLE="font-size:75%">ÖM</span>D? Misströsta ej, du behöver
            inte vänta ända till nästa D<span STYLE="font-size:75%">ÖM</span>D
            för att njuta av D-arnas favoritsport. I februari kommer nämligen D
            <span STYLE="font-size:75%">IM</span>D, Datateknologsektionens
            Interna Mästerskap i Dart. Här bjuds du på en helkväll med dart där
            du kan träna upp dina färdigheter och visa för alla andra att det är
            du som är kungen av denna ädla sport.
          </Typography>
        </Grid>
        <Grid container sx={{ mt: 6 }} /* ANDRA FESTER */>
          <Grid sm={12} md={6} sx={{ mb: 6, px: 5 }} /* Nolle-P */>
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
              ett hejdundrande firande på Kårallen tillsammans med Ling-, TBI-
              och Y-sektionens nyblivna ettan och faddrar.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ mb: 6, px: 5 }} /* ÅvveInvigningen */>
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
          <Grid sm={12} md={6} sx={{ mb: 6, px: 5 }} /* ToTK */>
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
          <Grid sm={12} md={6} sx={{ px: 5 }} /* Julfesten */>
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
          <Grid sm={12} md={6} sx={{ px: 6, mt: 6, margin: 'auto' }} /* DÖmD */>
          <Typography
            variant="h4"
            guttomButtom
            fontWeight={"bold"}
            color={"#E5398D"}
          >
            {" "}
            KOPS
          </Typography>
          <Typography variant="h6">
          I år levererar D-Group det mest episka eventet någonsin - KOPS! 
          Ni kommer njuta av en kulinarisk aktivitetsrunda, delta i 
          vårt Korvätarmästerskap och uppleva en natt fullspäckad med spännande underhållning. 
          Det hela avslutas med en eftersläppsdans på vår omvandlade dansgolv.
          </Typography>
        </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ m: 6 }} /* Våra Sponsorer*/
        >
          <Typography
            variant="h2"
            color="#754022"
            fontWeight={"bold"}
            sx={{ mb: 3 }}
          >
            Våra Sponsorer
          </Typography>
          <Box md={6} sx={{ my:3 }}>
            <Link
            href="https://www.microtec.eu/sv-se"
            underlink="hover"
            sx={{ textDecoration: "none"}}
            >
              <img 
              src={microtec}
              alt="Microtec Logo"
              width={"80%"}
              height={"80%"}
              />
            </Link>
          </Box>
          <Box md={5} sx={{ my:3 }}>
            <Link
              href="https://www.ericsson.com/en/careers"
              underlink="hover"
              sx={{ textDecoration: "none" }}
            >
              <img 
              src={ericsson} 
              alt="Ericsson Logo"
              
              />
            </Link>
          </Box>
          <Box md={5} sx={{ my:3 }}>
            <Link
              href="https://idainfront.se/en/"
              underlink="hover"
              sx={{ textDecoration: "none" }}
            >
              <img
                src={Ida}
                alt="Idainfront Logo"
                width={"100%"}
                height={"100%"}
              />
            </Link>
          </Box>
          <Box md={5} sx={{ marginTop:3 }}>
            <Link
              href="https://xamera.se/"
              underlink="hover"
              sx={{ textDecoration: "none" }}
            >
              <img
                src={xamera}
                alt="Xamera Logo"
                width={"40%"}
                // height={"30%"} 
              />
            </Link>
          </Box>

          <Typography varaint="h6" guttomButtom sx={{ mt: 6 }}>
            Vill ni också synas här? Kontakta oss på{" "}
            <a href="mailto:spons@d-group.se" style={{ color: "#754022" }}>
              spons@d-group.se
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Start;
