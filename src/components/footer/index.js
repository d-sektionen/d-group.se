

import { Title, Description, Row, Col, Grid } from "./FooterElements";

function FooterGrid() {
  return (
    <>
      <Grid>
      <Row height={"2vh"}>
        <Col size={1} color={"#754022"}></Col>
        <Col size={1} color={"#E5398D"}></Col>
        <Col size={1} color={"#F7E623"}></Col>
      </Row>
        <Row height={"auto"}>
          <Col size={1} color={"#152D54"}>
            <Title>Kontakt</Title>
            <Description>
              Frågor som rör dart eller dartutrustning ställs till{" "}
              <a href="mailto:dart@d-group.se"> dart@D-Group.se</a>.
            </Description>
            <Description>
              Frågor gällande hemsidan ställs till{" "}
              <a href="mailto:webb@d-group.se">webb@D-Group.se</a>.
            </Description>
            <Description>
              Kontakt, övriga frågor , strippförfrågningar, jobbförfrågningar
              (vi kan jobba på det mesta) eller vad du/ni än må ha på hjärtat
              görs via mail till{" "}
              <a href="mailto:info@d-group.se">info@D-Group.se</a>. <br />
              Frågor om D-Group.se,{" "}
              <a href="https://Tentakravallen.se">Tentakravallen.se</a>,{" "}
              <a href="https://Dömd.nu">DömD.nu</a> ställs till{" "}
              <a href="mailto:info@d-group.se">info@D-Group.se</a>.
            </Description>
          </Col>
          <Col
          style={{ padding: "0px", paddingRight: "1vh" }}
          color={"#E5398D"}
        ></Col>
          <Col size={1} color={"#152D54"}>
            <Title>Analog</Title>
            <Description>D-Group</Description>
            <Description>Datateknologsektionen</Description>
            <Description>Kårallen, Universitetet </Description>
            <Description>581 83 Linköping</Description>
            <Description>Org.nr: 822002-1409</Description>
            <Description>BG: 436-2497</Description>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default FooterGrid;