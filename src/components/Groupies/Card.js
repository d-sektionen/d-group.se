import { useState } from "react";
import { Grid, Modal, Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
import Questions from "./Information";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dg_logo from "../../images/logo.webp";

const SmallP = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;

  transform: scale(1.15);
  transform-origin: center bottom;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const BigP = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;

  transform: scale(1.15);
  transform-origin: center bottom;

  @media screen and (max-width: 899px) {
    display: none;
  }
`;

const DGLogo = styled.img`
  width: 55px;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
`;

const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  width: "350px",
  height: "87vh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "10px solid #000",
  boxShadow: 30,
  overflowY: "auto",
};

const questionTheme = createTheme({
  typography: {
    h6: {
      fontSize: "min(5vw, 30px)",
      color: "gray",
      fontStyle: "italic",
      textAlign: "center",

      "@media (min-width:900px)": {
        fontSize: "0.8em",
      },
    },

    h5: {
      fontSize: 20,
      textAlign: "center",
    },
  },
});

export default function CardGrid({ user }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          borderRadius: "20px",
          cursor: "pointer",
          boxShadow: "2px 2px 10px #D3D3D3",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ width: "100%" }}>
          <ThemeProvider theme={questionTheme}>
            <Grid
              xs={5}
              sx={{
                height: {
                  xs: "280px",
                  md: "320px",
                },
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <SmallP src={user.smallImage} alt={user.name} />

              <BigP src={user.image} alt={user.name} />
            </Grid>

            <Grid
              xs={7}
              sx={{
                py: "2em",
                px: "1em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {user.name}
              </Typography>

              <Typography variant="h6" gutterBottom>
                {user.post}
              </Typography>

              <Typography variant="h6" gutterBottom>
                <a
                  href={"mailto:" + user.email}
                  onClick={(e) => e.stopPropagation()}
                >
                  {user.email}
                </a>
              </Typography>

              <DGLogo src={dg_logo} alt="D-Group logo" />
            </Grid>
          </ThemeProvider>
        </Grid>
      </Box>

      <Modal open={open} onClose={handleClick}>
        <Box sx={style}>
          <Grid container>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={user.image}
                alt={user.name}
                style={{
                  width: "300px",
                  height: "300px",
                  marginTop: "10px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "50%",
                }}
              />
            </Grid>

            <Grid xs={12}>
              <Questions user={user} />
            </Grid>

            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                mb: 2,
              }}
            >
              <Button variant="contained" onClick={handleClick}>
                Close
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
