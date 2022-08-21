import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import dggrupp from "../../images/gropies/22_23_slapp.jpg";
import dgtillfallig from "../../images/gropies/22_23_formation.jpg";

export const fadeImages = [
  {
    url: dggrupp,
    caption: "D-Group 22/23",
  },
  {
    url: dgtillfallig,
    caption: "D-Group 22/23",
  },
];

export const Slideshow = () => {
  return (
    <div className="slide">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};
