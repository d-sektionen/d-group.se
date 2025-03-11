import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const StyledPlayer = styled.iframe`
  width: 100%;
  height: 50vh;
  border: none;
  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;

function TaggfilmerNy() {

  return (
    <Box sx={{ mt: 10, textAlign: "center", overflowX: "hidden" }}>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            D-Group taggar VSR 2025
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/1064432669?h=75ef96dd69"
            title="D-Group 24/25 taggar VSR"
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            D-Group taggar Snutte 2025
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/1064673623?h=2a86159d99"
            title="D-Group 24/25 taggar Snutte"
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            D-Group taggar Pallen 2024
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/1064672147?h=509c9f7690&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            title="D-Group 24/25 taggar Pallen"
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            D-Group taggar LeMans 2024
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/1064672303?h=9e896f9b54&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="D-Group 24/25 taggar LeMans"
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            D-Group taggar KOPS 2024
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/1064439471?h=9fcc497d90"
            title="D-Group 24/25 taggar KOPS!"
          />
        </Grid>
      </Grid>
     
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            D-Group taggar Schalget 2021
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/648998324?h=2d0c67f9b0&badge=0&autopause=0&player_id=0&app_id=58479"
            title="D-Group 21/22 taggar Schlaget!"
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ my: 2 }}>
            D-Group taggar PALLEN 2021
          </Typography>
          <StyledPlayer
            src="https://player.vimeo.com/video/642074566?h=8c25880d4a&badge=0&autopause=0&player_id=0&app_id=58479"
            title="D-Group taggar PALLEN 2021"
          />

        </Grid>
      </Grid>
    </Box>
  );
}

export default TaggfilmerNy;