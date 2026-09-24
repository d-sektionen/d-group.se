import React from "react";
import { Grid, Row, Col } from "./Friendselemt";
import {FriendCard} from './Friendcard'

const Festerier = [
  {
    name: "Bi6",
    sektion: "TBI - Sektionen",
    logo: "https://i.imgur.com/BPIPhI2.png",
    website: "https://bi6.se/",
    websitename: "Bi6",
  },
  {
    name: "VI-ling",
    sektion: "Ling - Sektionen",
    logo: "https://i.imgur.com/SZNsMGt.png",
    website: "https://vi-ling.se/",
    websitename: "VI-Ling",
  },
  {
    name: "LÄX",
    sektion: "Lärar - Sektionen",
    logo: "https://i.imgur.com/vvEVNBM.png",
    website: "https://www.lsek.se/Vara-utskott/Laxmasteriet",
    websitename: "LÄX",
  },
  {
    name: "FestMaskineriet",
    sektion: "M - Sektionen",
    logo: "https://i.imgur.com/J5VYPdK.png",
    website: "https://www.festmaskineriet.com/",
    websitename: "Festmaskineriet",
  },
  {
    name: "Y6",
    sektion: "M - Sektionen",
    logo: "https://i.imgur.com/FO7agXd.png",
    website: "https://www.ysex.se/",
    websitename: "Y6",
  },
  {
    name: "ClubMästeriet",
    sektion: "Y - Sektionen",
    logo: "https://i.imgur.com/GbQ0wdO.png",
    website: "https://clubmasteriet.se/",
    websitename: "ClubMästeriet",
  },
  {
    name: "SSKål",
    sektion: "Sjuksköterke - Sektionen",
    logo: "https://i.imgur.com/MTtiacZ.jpg",
    website: "https://www.sskal.se/",
    websitename: "SSKål",
  },
  {
    name: "MedSex",
    sektion: "Medicinska Föreningen",
    logo: "https://i.imgur.com/2j9Y5ES.png",
    website: "https://www.facebook.com/MedSexYeah/",
    websitename: "MedSex",
  },
  {
    name: "4V",
    sektion: "MatNat - Sektionen",
    logo: "https://i.imgur.com/8JJzBl6.jpg",
    website: "http://www.4verkeriet.se/",
    websitename: "4V",
  },
  {
    name: "OralSpex",
    sektion: "Logoped - Sektionen",
    logo: "https://i.imgur.com/jiL0hJk.png",
    website: "https://oralspex.se/",
    websitename: "OralSpex",
  },
  {
    name: "Reflex",
    sektion: "FYSIO - Sektionen",
    logo: "https://i.imgur.com/DxXKGWQ.png",
    website: "https://www.facebook.com/ReflexFesteri/",
    websitename: "Reflex",
  },
  {
    name: "FylleCellen",
    sektion: "Medicinska - Fakulteten",
    logo: "https://i.imgur.com/pu1B7Dc.png",
    website: "https://www.facebook.com/Fyllecellen/",
    websitename: "FylleCellen",
  },
  {
    name: "sKVaLp",
    sektion: "Kultor - Sektionen",
    logo: "https://i.imgur.com/znEBfy1.jpg",
    website: "https://www.facebook.com/festerietsKVaLp/",
    websitename: "sKVaLp",
  },
  {
    name: "Psyko",
    sektion: "Psykolog - Sektionen",
    logo: "https://i.imgur.com/563EySA.jpg",
    website: "https://www.facebook.com/FesterietPsyKO/",
    websitename: "Psyko",
  },
];

function Ourfriends() {
  return (
    <Grid>
      <Row>
        {Festerier.map((friend) => (
          <Col key={friend.name}>
            <FriendCard {...friend} />
          </Col>
        ))}
      </Row>
    </Grid>
  );
}

export default Ourfriends;
