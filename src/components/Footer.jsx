import React from "react";
import Container from '@material-ui/core/Container';
import "../css/bigcss.css"


const Footer = () => {
  return (
    <Container>
      <div className="row">
            <div class="col-12 col-md-8">
              <h1>Kontakt</h1>
              
              Frågor som rör dart eller dartutrustning ställs till <a href="mailto:dart@d-group.se"> dart@D-Group.se</a>. <br/>
              Frågor gällande hemsidan ställs till <a href="mailto:webb@d-group.se">webb@d-group.se</a> <br/>
              Kontakt, övriga frågor
              , strippförfrågningar, jobbförfrågningar (vi kan jobba på det mesta) eller vad du/ni än må ha på hjärtat görs via mail till <a href="mailto:info@d-group.se">info@D-Group.se</a>. <br/>Frågor om D-Group.se, <a href="https://Tentakravallen.se">Tentakravallen.se</a>, <a href ="https://Dömd.nu">DömD.nu</a>  ställs
              till <a href="mailto:info@d-group.se">info@D-Group.se</a>.
            </div>
            <div class="col-6 col-md-4">
              <h1>Analog</h1>
              
              D-Group <br/> Datateknologsektionen <br/> Kårallen, Universitetet <br/> 581 83 Linköping <br/>
              Org.nr: 822002-1409 <br/> BG: 436-2497 <br/>
            </div>
        </div>
    </Container>
  );
};
export default Footer;