import React from "react";
import { Grid, Row, Col} from "./taggfilmerelements";
import TaggCard from './TaggCard'

const taggDescription = [
  {
    url: "https://vimeo.com/642074566",
    title: "D-Group 21/22 Taggar PALLEN",
  },
  {
    url: "https://vimeo.com/636937358",
    title: "D-Group 21/22 Taggar T/oTK",
  },
  {
    url: "https://vimeo.com/469248066",
    title: "D-Group 20/21 Taggar DÖMD",
  },
  {
    url: "https://vimeo.com/533536885",
    title: "D-Group 20/21 Taggar T/oTK",
  },
];

function taggfilmer() {
  return (
    <Grid>
      <Row>
        <Col size={1}> </Col>
        <Col>
          <TaggCard url={taggDescription[1].url} name={taggDescription[1].title}></TaggCard>
        </Col>
        <Col size={1}> </Col>
        
      </Row>
      <Row>
      <Col size={1}><TaggCard url={taggDescription[0].url} name={taggDescription[0].title}/></Col>
        <Col size={1}>
          <TaggCard url={taggDescription[3].url} name={taggDescription[2].title}/>
        </Col>
        <Col size={1} >
          <TaggCard url={taggDescription[2].url} name={taggDescription[3].title}/>
        </Col>
      </Row>
    </Grid>
  );
}

export default taggfilmer;
