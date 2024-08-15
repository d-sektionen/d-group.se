import React from "react";
import Gallery from "react-grid-gallery";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import dg2324 from "../../images/gropies/dgroup2324_landscape.jpg";
import dg2223 from "../../images/dpateter/dg2223.jpg";
import dg2122 from "../../images/dpateter/dg2122.jpg";
import dg2021 from "../../images/dpateter/dg2021.png";
import dg1920 from "../../images/dpateter/dg1920.jpg";
import dg1819 from "../../images/dpateter/dg1819.jpg";
import dg1718 from "../../images/dpateter/dg1718.jpg";
import dg1617 from "../../images/dpateter/dg1617.jpg";
import dg1516 from "../../images/dpateter/dg1516.jpg";
import dg1415 from "../../images/dpateter/dg1415.jpg";
import dg1314 from "../../images/dpateter/dg1314.jpg";
import dg1213 from "../../images/dpateter/dg1213.jpg";
import dg1112 from "../../images/dpateter/dg1112.jpg";
import dg1011 from "../../images/dpateter/dg1011.jpg";
import dg0910 from "../../images/dpateter/dg0910.jpg";
import dg0809 from "../../images/dpateter/dg0809.jpg";
import dg0708 from "../../images/dpateter/dg0708.jpg";
import dg0607 from "../../images/dpateter/dg0607.jpg";
import dg0506 from "../../images/dpateter/dg0506.jpg";
import dg0405 from "../../images/dpateter/dg0405.jpg";
import dg0304 from "../../images/dpateter/dg0304.jpg";
import dg0203 from "../../images/dpateter/dg0203.jpg";
import dg0102 from "../../images/dpateter/dg0102.jpg";
import dg0001 from "../../images/dpateter/dg0001.jpg";
import dg9900 from "../../images/dpateter/dg9900.jpg";
import dg9899 from "../../images/dpateter/dg9899.jpg";
import dg9798 from "../../images/dpateter/dg9798.jpg";
import dg9697 from "../../images/dpateter/dg9697.jpg";
import dg9495 from "../../images/dpateter/dg9495.jpg";
import dg9192 from "../../images/dpateter/dg9192.jpg";
import dg8788 from "../../images/dpateter/dg8788.jpg";
import dg8182 from "../../images/dpateter/dg8182.jpg";

const images = [
  {
    src: dg2324,
    thumbnail: dg2324,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 23/24 - Familjen Nãu Knaëi Fàurãęn",
    thumbnailCaption: "D-Group 23/24",
  },
  {
    src: dg2223,
    thumbnail: dg2223,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 22/23 - Familjen Coulêk tïv néiçúde",
    thumbnailCaption: "D-Group 22/23",
  },
  {
    src: dg2122,
    thumbnail: dg2122,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 21/22 - Familjen Chláirs oüf Phróplîexios",
    thumbnailCaption: "D-Group 21/22",
  },
  {
    src: dg2021,
    thumbnail: dg2021,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 20/21 - Familjen Dequerré Altié",
    thumbnailCaption: "D-Group 20/21",
  },
  {
    src: dg1920,
    thumbnail: dg1920,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 19/20 - Familjen Aux Verts Douze",
    thumbnailCaption: "D-Group 19/20",
  },
  {
    src: dg1819,
    thumbnail: dg1819,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 18/19 - Familjen Vúh-Kánt Bost",
    thumbnailCaption: "D-Group 18/19",
  },
  {
    src: dg1718,
    thumbnail: dg1718,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 17/18 - Familjen Bot Xiu Phen",
    thumbnailCaption: "D-Group 17/18",
  },
  {
    src: dg1617,
    thumbnail: dg1617,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 16/17 - Familjen Züpr-izen",
    thumbnailCaption: "D-Group 16/17",
  },
  {
    src: dg1516,
    thumbnail: dg1516,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 15/16 - Familjen von Neudeslättenräze",
    thumbnailCaption: "D-Group 15/16",
  },
  {
    src: dg1415,
    thumbnail: dg1415,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 14/15 - Familjen Dräugündurfeften",
    thumbnailCaption: "D-Group 14/15",
  },
  {
    src: dg1314,
    thumbnail: dg1314,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 13/14 - Familjen Anscriosta",
    thumbnailCaption: "D-Group 13/14",
  },
  {
    src: dg1213,
    thumbnail: dg1213,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 12/13 - Familjen Tüngraukk",
    thumbnailCaption: "D-Group 12/13",
  },
  {
    src: dg1112,
    thumbnail: dg1112,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 11/12 - Familjen Van Marcenslauss",
    thumbnailCaption: "D-Group 11/12",
  },
  {
    src: dg1011,
    thumbnail: dg1011,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 10/11 - Familjen Lao Tengo",
    thumbnailCaption: "D-Group 10/11",
  },
  {
    src: dg0910,
    thumbnail: dg0910,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 09/010 - Familjen Xaph-Lee-Pakh",
    thumbnailCaption: "D-Group 09/10",
  },
  {
    src: dg0809,
    thumbnail: dg0809,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 08/09 - Familjen Allashgashup",
    thumbnailCaption: "D-Group 08/09",
  },
  {
    src: dg0708,
    thumbnail: dg0708,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 07/08 - Familjen Baddhisprhitin",
    thumbnailCaption: "D-Group 07/08",
  },
  {
    src: dg0607,
    thumbnail: dg0607,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 06/07 - Familjen Raundundirfauvten",
    thumbnailCaption: "D-Group 06/07",
  },
  {
    src: dg0506,
    thumbnail: dg0506,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 05/06 - Familjen Boukishibaldjzan",
    thumbnailCaption: "D-Group 05/06",
  },
  {
    src: dg0405,
    thumbnail: dg0405,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 04/05 - Familjen Täkkaditiikää",
    thumbnailCaption: "D-Group 04/05",
  },
  {
    src: dg0304,
    thumbnail: dg0304,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 03/04 - Familjen Hin-Kaiwo-Toka",
    thumbnailCaption: "D-Group 03/04",
  },
  {
    src: dg0203,
    thumbnail: dg0203,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 02/03 - La Familia Don Quebefvre",
    thumbnailCaption: "D-Group 02/03",
  },
  {
    src: dg0102,
    thumbnail: dg0102,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 01/02 - Familie van Wavullijae",
    thumbnailCaption: "D-Group 01/02",
  },
  {
    src: dg0001,
    thumbnail: dg0001,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 00/01 - La Familia di Ardonccio",
    thumbnailCaption: "D-Group 00/01",
  },
  {
    src: dg9900,
    thumbnail: dg9900,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 99/00 - La Famille L'Aphârfvhine",
    thumbnailCaption: "D-Group 99/00",
  },
  {
    src: dg9899,
    thumbnail: dg9899,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 98/99 - Familjen á Thacqxupher",
    thumbnailCaption: "D-Group 98/99",
  },
  {
    src: dg9798,
    thumbnail: dg9798,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 97/98 - La Familia el Zcqharoẽl",
    thumbnailCaption: "D-Group 97/98",
  },
  {
    src: dg9697,
    thumbnail: dg9697,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 96/97 - The O'Dragly family",
    thumbnailCaption: "D-Group 96/97",
  },
  {
    src: dg9495,
    thumbnail: dg9495,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 94/95 - Familjen van der Aakroekar",
    thumbnailCaption: " D-Group 94/95",
  },
  {
    src: dg9192,
    thumbnail: dg9192,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 91/92",
    thumbnailCaption: " D-Group 91/92",
  },
  {
    src: dg8788,
    thumbnail: dg8788,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 87/88",
    thumbnailCaption: "D-Group 87/88",
  },
  {
    src: dg8182,
    thumbnail: dg8182,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 81/82 - Fathers of DÖMD",
    thumbnailCaption: "D-Group 81/82",
  },
];

const WallofFame = () => {
  return (
    <Box sx={{ m: 10, textAlign: "center", fontWeight: "bold" }}>
      <Grid>
        <Gallery
          images={images}
          enableImageSelection={false}
          backdropClosesModal={true}
          showImageCount={false}
          preloadNextImage={true}
          showLightboxThumbnails={true}
          margin={6}
        />
      </Grid>
    </Box>
  );
};

export default WallofFame;
