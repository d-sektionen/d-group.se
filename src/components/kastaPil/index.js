import { Box, Grid, Typography, Card, CardContent, Stack } from "@mui/material";

import ImgVanlig from '../../images/IMG_9142.JPG';
import ImgKiller from '../../images/IMG_9081.JPG';
import ImgKlockan from '../../images/IMG_9252.JPG';

const SectionCard = ({ title, children, bgImage }) => (
  <Card
   sx={{
      maxWidth: 800,
      mx: "auto",
      borderRadius: 4,
      boxShadow: 3,
      position: "relative",
      overflow: "hidden",
      color: "white",
      p: 0,

      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",
        transform: "scale(1.1)",
        zIndex: 0,
      },

      "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.25)", // overlay
        zIndex: 1,
      },

    }}
  >
    <CardContent
      sx={{ position: "relative", zIndex: 2, p: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#E5398D"
        gutterBottom
      >
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const List = ({ items }) => (
  <Stack
    spacing={1}
    sx={{
      mt: 1,
      maxWidth: 160,   // styr hur bred listan är
      mx: "auto",      // centrerar hela blocket
      textAlign: "left",
    }}
  >
    {items.map((item, index) => (
      <Typography key={index}>
        {item}
      </Typography>
    ))}
  </Stack>
);
function KastaPil() {
  return (
    <Box sx={{ mt: 10, textAlign: "center", px: 2, mb: 4 }}>
      
      <Typography variant="h2" fontWeight="bold" color="#E5398D">
        Kasta pil med oss!
      </Typography>

      <Typography variant="h5" sx={{ mt: 2, mb: 6, maxWidth: 800, mx: "auto" }}>
        Vi i D-Group kastar pil på massa olika sätt, i alla väder och vind,
        oavsett fyllenivå och eventuella skador. Här är några av våra favoriter:
      </Typography>

      <Grid container spacing={4} justifyContent="center">

        {/* VANLIG MATCH */}
        <Grid item xs={12}>
          <SectionCard 
          title="Vanlig match"
          bgImage={ImgVanlig}>
            
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Till denna behövs:
            </Typography>

            <List
              items={[
                "1 piltavla",
                "1 alt. 2 set pilar",
                "2 spelare",
                "DÖMD-appen (valfri)",
              ]}
            />

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
              Hur:
            </Typography>

            {/* <Typography sx={{ mt: 1, textAlign: "left" }}>
              Middling – spelarna börjar med att kasta 1 pil var mot mitten av tavlan.
              Den som är närmast mitten får börja kasta. Därefter turas spelarna om att
              kasta 3 pilar åt gången från 301 (eller 501). När en spelare kommer under
              50 poäng startar en nedräkning på 5 rundor. Under dessa måste spelaren gå
              ut på dubbel. Efter det får man gå ut på valfritt sätt. Först som går jämt ut på 0 vinner.
            </Typography> */}

       
          <Typography sx={{ mt: 1, textAlign: "left" }}>
            Spelet börjar med att varje spelare kastar en pil mot mitten av tavlan. 
            Den som träffar närmast mitten får börja kasta.
          </Typography>
          <Typography sx={{ mt: 1, textAlign: "left" }}>
            Därefter turas spelarna om att kasta tre pilar per omgång, 
            med startpoäng 301 eller 501.
          </Typography>
          <Typography sx={{ mt: 1, textAlign: "left" }}>
            När en spelares poäng går under 50 startar en nedräkning på fem rundor. 
            Under dessa rundor måste spelaren gå ut på dubbel.
          </Typography>
          <Typography sx={{ mt: 1, textAlign: "left" }}>
            När nedräkningen är klar kan spelaren gå ut på valfritt sätt. 
            Den som först når 0 poäng vinner.
          </Typography>

          </SectionCard>
        </Grid>

        {/* KILLER */}
        <Grid item xs={12}>
          <SectionCard title="Killer"
          bgImage={ImgKiller}>
            
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Till denna behövs:
            </Typography>

            <List
              items={[
                "1 piltavla",
                "1+ set pilar",
                "Vänner (valfritt antal)",
              ]}
            />

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
              Hur:
            </Typography>

            {/* <Typography sx={{ mt: 1, textAlign: "left" }}>
            Leken börjar med att varje spelare kastar 1 pil med dennes icke-dominanta hand.
            Nummret där pilen fastnar tillhör nu spelaren som kastade. När alla har kastat 
            sin pil, är det den som fick lägst nummer som börjar, och sen är det stigande ordning.
            Alla börjar med 0 liv, och man börjar kasta 3 pilar mot sitt eget nummer, varpå 
            man får ett extra liv för varje pil man träffar på sitt eget nummer. Målet är att
            nå ett förutbestämt antal liv (förslagsvis 3 eller 5), och då är man killer. 
            Som killer får man börja kasta på andras nummer, för att få ner dem under 0 liv.
            Den som överlever längst och är sist kvar vinner.
            Det kan vara fler spelare som är killer samtidigt.
            </Typography> */}
            <Typography sx={{ mt: 3, textAlign: "left" }}>
              Spelet börjar med att varje spelare kastar en pil med sin 
              icke-dominanta hand. Numret där pilen fastnar blir spelarens nummer.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              När alla har kastat sin första pil börjar spelet med den som 
              fick lägst nummer och fortsätter sedan i stigande ordning.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              Alla spelare startar med 0 liv. Spelarna kastar tre pilar per 
              omgång mot sitt eget nummer. Varje träff på det egna numret ger ett extra liv.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              Målet är att nå ett förutbestämt antal liv, till exempel 3 eller 5. 
              När man når detta blir man Killer. Som Killer kan man börja 
              kasta på andras nummer för att minska deras liv under 0.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              Den som överlever längst och är sist kvar vinner. Flera spelare kan vara 
              Killer samtidigt.
            </Typography>

          </SectionCard>
        </Grid>

        {/* Klockan */}
        <Grid item xs={12}>
          <SectionCard 
          title="Klockan"
          bgImage={ImgKlockan}>
            
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Till denna behövs:
            </Typography>

            <List
              items={[
                "1 piltavla",
                "1+ set pilar",
                "1 eller fler spelare",
              ]}
            />

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
              Hur:
            </Typography>

            {/* <Typography sx={{ mt: 1, textAlign: "left" }}>
              Leken börjar med att bestämma ordning på alla som är med i leken, görs på godtyckligt sätt men vi tipsar om denna: Kasta en pil med vänsterarmen, 
              det nummer som sätts avgör på vilken plats man hamnar, lägst börjar. När ordningen är fastställd, börjar man kasta på siffra 1. Väl träffad så 
              kan man forsätta uppåt i numerisk ordning, dvs 2 sen 3 sen 4 sen 5 osv osv. Man kastar 3 pilar åt gången vilket möjliggör att träffa maximalt 3 siffror per omgång. 
              Målet med tävlingen är att nå bullseye, dvs kasta upp till 20 sen träffa bullseye. Vinnaren är den som först träffar bullseye och tävlingen är över. 
            </Typography> */}

            <Typography sx={{ mt: 1, textAlign: "left" }}>
              Spelet börjar med att bestämma ordning på alla deltagare. 
              När ordningen är fastställd börjar spelet med att första deltagaren kastar på nummer 1. 
              När detta nummer är träffat fortsätter man uppåt i numerisk 
              ordning: 2, 3, 4, 5 och så vidare.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              Spelarna kastar tre pilar per omgång, vilket gör det möjligt att 
              träffa upp till tre siffror per runda.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              Målet är att nå bullseye, dvs kasta upp till 20 och sedan träffa bullseye. 
              Den som först träffar bullseye vinner och spelet är slut.
            </Typography>
            <Typography sx={{ mt: 1, textAlign: "left" }}>
              En svårare variant är att endast träffa dubbel- eller trippelområden 
              för varje nummer, vilket ökar utmaningen.
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
              Varianter:
            </Typography>

            <Typography sx={{ mt: 1, textAlign: "left" }}>
              En svårare variant på denna lek, är att man kan köra med att 
              enbart träffa dubbel eller trippel av varje nummer.
            </Typography>

          </SectionCard>
        </Grid>

      </Grid>
    </Box>
  );
}

export default KastaPil;