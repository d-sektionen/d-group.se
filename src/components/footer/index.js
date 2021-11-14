import React from "react";
import { Col, Grid, Info, Row, Title } from "./FooterElements";

function Footer() {
  return (
    <Grid>
      <Row height={"2vh"}>
        <Col size={1} color={"#754022"}></Col>
        <Col size={1} color={"#E5398D"}></Col>
        <Col size={1} color={"#F7E623"}></Col>
      </Row>
      <Row height={"auto"}>
        <Col size={1} color={"#152D54"}>
          <Title>Kontakt</Title>
          <Info>
            Frågor som rör dart eller dartutrustning ställs till
            dart@D-Group.se.
          </Info>
          <Info>Frågor gällande hemsidan ställs till webb@d-group.se</Info>
          <Info>
            Kontakt, övriga frågor , strippförfrågningar, jobbförfrågningar (vi
            kan jobba på det mesta) eller vad du/ni än må ha på hjärtat görs via
            mail till info@D-Group.se.
          </Info>
          <Info>
            Frågor om D-Group.se, Tentakravallen.se, DömD.nu ställs till
            info@D-Group.se.
          </Info>
        </Col>
        <Col
          style={{ padding: "0px", paddingRight: "1vh" }}
          color={"#E5398D"}
        ></Col>
        <Col size={1} color={"#152D54"}>
          <Title>Analog</Title>
          <Info>D-Group</Info>
          <Info>Datateknologsektionen</Info>
          <Info>Kårallen, Universitetet</Info>
          <Info>581 83 Linköping</Info>
          <Info>Org.nr: 822002-1409</Info>
          <Info>BG: 436-2497 </Info>
        </Col>
      </Row>
    </Grid>
  );
}

export default Footer;
