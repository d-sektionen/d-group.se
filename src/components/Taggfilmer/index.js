import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styled from "styled-components";

const StyledPlayer = styled.iframe`
  height: "50vh";
  width: "50vw";

  @media screen and (max-width: 768px) {
    width: 100%;
    height: "auto";
  }
`;

function TaggfilmerNy() {
  return (
    <Box
      sx={{
        mt: 10,
        textAlign: "center",
        fontWeight: "bold",
        overflowX: "hidden",
      }}
      container
    >
      <Grid sm={12}>
        <StyledPlayer
          src="https://player.vimeo.com/video/648998324?h=2d0c67f9b0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen;"
          allowfullscreen
          style={{
            height: 50 + "vh",
            width: 100 + "vw",
            paddingtop: 56.25 + "%",
          }}
          title="D-Group 21/22 taggar Schlaget!"
        />
        <Typography variant="h4" guttomButtom sx={{ mt: 2, mb: 6 }}>
          D-Group taggar Schalget 2021
        </Typography>
      </Grid>
      <Grid sm={12} container>
        <Grid sm={12} md={6}>
          <StyledPlayer
            src="https://player.vimeo.com/video/642074566?h=8c25880d4a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen;"
            allowfullscreen
            title="D-Group 21/22 taggar Schlaget!"
            style={{
              height: 50 + "vh",
              width: 50 + "vw",
              paddingtop: 56.25 + "%",
            }}
          />
          <Typography variant="h4" guttomButtom sx={{ my: 2 }}>
            D-Group taggar PALLEN 2021
          </Typography>
        </Grid>

        <Grid xs={12} md={6}>
          <StyledPlayer
            src="https://player.vimeo.com/video/636937358?h=2267219deb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen;"
            allowfullscreen
            title="D-Group 21/22 taggar Schlaget!"
            style={{
              height: 50 + "vh",
              width: 50 + "vw",
              paddingtop: 56.25 + "%",
            }}
          ></StyledPlayer>
          <Typography variant="h4" guttomButtom sx={{ my: 2 }}>
            D-Group taggar ToTK 2021
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaggfilmerNy;
