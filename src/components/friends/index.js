import React from "react";
import { Grid, Row, Col } from "./friendselemt";
import friendCard from "./friendcard";

const Festerier = [
  {
    name: "Bi6",
    sektion: "TBI - Sektionen",
    logo: "https://i.imgur.com/A1hN172.jpg",
    website: "https://bi6.se/",
    websitename: "Bi6",
  },
  {
    name: "VI-ling",
    sektion: "Ling - Sektionen",
    logo: "https://imgur.com/SZNsMGt",
    website: "https://vi-ling.se/",
    websitename: "VI-Ling",
  },
  {
    name: "LÄX",
    sektion: "Lärar - Sektionen",
    logo: "https://imgur.com/vvEVNBM",
    website: "https://www.lsek.se/Vara-utskott/Laxmasteriet",
    websitename: "LÄX",
  },
  {
    name: "FestMaskineriet",
    sektion: "M - Sektionen",
    logo: "https://imgur.com/J5VYPdK",
    website: "https://www.festmaskineriet.com/",
    websitename: "Festmaskineriet",
  },
  {
    name: "Y6",
    sektion: "M - Sektionen",
    logo: "https://imgur.com/FO7agXd",
    website: "https://www.ysex.se/",
    websitename: "Y6",
  },
  {
    name: "ClubMästeriet",
    sektion: "Y - Sektionen",
    logo: "https://imgur.com/GbQ0wdO",
    website: "https://www.sskal.se/",
    websitename: "ClubMästeriet",
  },
  {
    name: "SSKål",
    sektion: "Sjuksköterke - Sektionen",
    logo: "https://imgur.com/MTtiacZ",
    website: "https://clubmasteriet.se/",
    websitename: "SSKål",
  },
  {
    name: "MedSex",
    sektion: "Medicinska Föreningen",
    logo: "https://imgur.com/2j9Y5ES",
    website: "https://www.facebook.com/MedSexYeah/",
    websitename: "MedSex",
  },
  {
    name: "Jur6",
    sektion: "Affärsjuridiska Föreningen",
    logo: "https://imgur.com/EvSTPbX",
    website: "https://jur6.se/",
    websitename: "Jur6",
  },
  {
    name: "OralSpex",
    sektion: "Logoped - Sektionen",
    logo: "https://imgur.com/jiL0hJk",
    website: "https://oralspex.se/",
    websitename: "OralSpex",
  },
  {
    name: "Reflex",
    sektion: "FYSIO - Sektionen",
    logo: "https://imgur.com/DxXKGWQ",
    website: "https://www.facebook.com/ReflexFesteri/",
    websitename: "Reflex",
  },
  {
    name: "FylleCellen",
    sektion: "Medicinska - Fakulteten",
    logo: "https://imgur.com/pu1B7Dc",
    website: "https://www.facebook.com/Fyllecellen/",
    websitename: "FylleCellen",
  },
  {
    name: "sKVaLp",
    sektion: "Kultor - Sektionen",
    logo: "https://imgur.com/znEBfy1",
    website: "https://www.facebook.com/festerietsKVaLp/",
    websitename: "sKVaLp",
  },
  {
    name: "Psyko",
    sektion: "Psykolog - Sektionen",
    logo: "https://i.imgur.com/A1hN172.jpg",
    website: "https://www.facebook.com/FesterietPsyKO/",
    websitename: "Psyko",
  },
];

function ourfriends() {
  return (
    <Grid>
      <Row height={"2vh"}>
        <Col size={1}  height={"2vh"}>
          <friendCard
            logo="https://i.imgur.com/A1hN172.jpg"
            name={Festerier[0].name}
            sektion={Festerier[0].sektion}
            website={Festerier[0].website}
            websitename={Festerier[0].websitename}
          />
        </Col>
      </Row>
    </Grid>
  );
}

export default ourfriends;
