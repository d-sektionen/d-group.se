import React from "react";
import { Slide } from "react-slideshow-image";
import Countdown from "react-countdown";
import "react-slideshow-image/dist/styles.css";
import "../css/start.css";
import dartimg from "../images/dart.png";
import patetimg from "../images/patetbild.png";
import { Container } from "@material-ui/core";
import ericsson from "../images/spons/ericssonSpons.png";
//import attentec from "../images/spons/attentecSpons.png"
//import idainfront from "../images/spons/idainfrontSpons.png"

const DOMDdate = new Date("2024-04-11T10:00:00");

const render = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      Bara {days} dagar {hours} timmar {minutes} minuter och {seconds} sekunder
      kvar tills DömD!!
    </span>
  );
};

const Start = () => {
  return (
    <Container>
      <div className="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://i.imgur.com/IXKo07F.jpg)`,
              }}
            >
              <span>
                <h1>Lär känna medlemmarna i D-Group 22/23</h1>

                <p>Vilka är vi som går runt i Linköpings finaste ovveraller</p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${dartimg})` }}>
              <span>
                <h1>
                  Tagga D<lower>ÖM</lower>D!
                </h1>

                <p>
                  <Countdown date={DOMDdate} renderer={render} />
                </p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${patetimg})` }}>
              <span>
                <h1>Familjen Dequerré Altié</h1>

                <p>Och andra pateter hittar ni i vår Wall of Fame</p>
              </span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="Start-Content">
        <div className="row">
          <div class="col-12 col-md-8 ">
            <h1> Om oss</h1>
            <p>
              D-Group är D-sektionens eminenta festeri. Vi har funnits sedan
              världen var svart-vit och popcorn inte gick att göra i micron.
              Innan dess låg vi i mammas kära mage och smed planer om
              världsherravälde genom pilkastning, ölhäfv och självrökande
              cigaretter. Vi tycker om att ha kul!
            </p>
            <p>
              Ni hittar oss även på både{" "}
              <a href="https://www.facebook.com/DGroup2223">Facebook</a> och{" "}
              <a href="https://www.instagram.com/dgroup2223/">Instagram.</a>
            </p>
          </div>
          <div class="col-sm-4 sidebar">
            <h1>Sponsorer</h1>
            <img src={ericsson} alt="sponsBild" width={100} />
            <p>
              Vill ni också synas här? Kontakta oss på{" "}
              <a href="mailto:spons@d-group.se!">spons@d-group.se</a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Start;
