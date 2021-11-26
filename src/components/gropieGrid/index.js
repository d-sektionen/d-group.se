import React from "react";
import About from "./About";
import GroupieCard from "./GropieCard";
import { Grid, Row, Col } from "./gropieGridElements";

const Information = [
  {
    title: "Om D-Group",
    text: "D-Group är D-sektionens eminenta festeri. Vi har funnits sedan världen var svart-vit och popcorn inte gick att göra i micron. Innan dess låg vi i mammas kära mage och smed planer om världsherravälde genom pilkastning, ölhäfv och självrökande cigaretter. Vi tycker om att ha kul!",
  },
  {
    title: "Vilka är vi?",
    text: "Tjena Tjena! Vi är familjen Chláirs oüf Phróplîexios, för att veta mer om en specifik medlem är det bara att klicka på bilden!",
  },
];
const Groupis = [
  { name: "Tamara Jurić", post: "Chief", image: "https://i.imgur.com/9QCprnd.jpg" },
  { name: "Emma Wahlund", post: "Ca$h", image: "https://i.imgur.com/3Vrvgj6.jpg" },
  { name: "Marcus Döberl", post: "Webb & ÖverDomaren (TM)", image: "https://i.imgur.com/SGHNmjK.jpg" },
  { name: "Anton Bergman", post: "Werk", image: "https://i.imgur.com/QcsoV4W.jpg" },
  { name: "Axel Peters", post: "Pr & Event", image: "https://i.imgur.com/QpUTpSB.jpg" },
  { name: "Shamil Limbasiya", post: "J^8", image: "https://i.imgur.com/jVaoGVn.jpg" },
  { name: "Alice Bramstedt", post: "Spons", image: "https://i.imgur.com/DvwMyRa.jpg" },
  { name: "Emma Siklosi", post: "Trykk", image: "https://i.imgur.com/A1hN172.jpg" },
  { name: "Elias Hörnberg", post: "Biljett & U-Lag", image: "https://i.imgur.com/wAEKWn2.jpg" },
  { name: "Oscar Stolpe", post: "Mat & Sittning", image: "https://i.imgur.com/xWSoQBM.jpg" },
  { name: "Erik Hilke", post: "Trykk", image: "https://i.imgur.com/sFY2TtE.jpg" },
  { name: "Johan Sjöstedt", post: "Pr & Personal", image: "https://i.imgur.com/nHiwZiO.jpg" },
  { name: "Morgan Uvelid", post: "Öl & Bar", image: "https://i.imgur.com/SfjntgL.jpg" },
];



function GroupieGrid() {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <About title={Information[0].title} text={Information[0].text} />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[0].name} post={Groupis[0].post} image={Groupis[0].image}/>
        </Col>
        <Col size={1}>
          <About title={Information[1].title} text={Information[1].text} />
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <GroupieCard name={Groupis[1].name} post={Groupis[1].post} image={Groupis[1].image}/>
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[2].name} post={Groupis[2].post} image={Groupis[2].image}/>
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[3].name} post={Groupis[3].post} image={Groupis[3].image}/>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <GroupieCard name={Groupis[4].name} post={Groupis[4].post} image={Groupis[4].image}  />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[5].name} post={Groupis[5].post} image={Groupis[5].image}  />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[6].name} post={Groupis[6].post} image={Groupis[6].image}  />
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <GroupieCard name={Groupis[7].name} post={Groupis[7].post} image={Groupis[7].image}  />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[8].name} post={Groupis[8].post} image={Groupis[8].image}  />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[9].name} post={Groupis[9].post} image={Groupis[9].image}  />
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <GroupieCard name={Groupis[10].name} post={Groupis[10].post} image={Groupis[10].image}  />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[11].name} post={Groupis[11].post} image={Groupis[11].image}  />
        </Col>
        <Col size={1}>
          <GroupieCard name={Groupis[12].name} post={Groupis[12].post} image={Groupis[12].image}  />
        </Col>
      </Row>
    </Grid>
  );
}
export default GroupieGrid;
