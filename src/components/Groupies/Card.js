import { useState } from "react";
import {
  Grid,
  Modal,
  Typography,
  Box,
  Button,
  autocompleteClasses,
} from "@mui/material";
import styled from "styled-components";
import Frågor from "./Information";
import { FullscreenExit } from "@mui/icons-material";
import { findByLabelText } from "@testing-library/react";
import { pink } from "@mui/material/colors";
import { red } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dg_logo from "../../images/logo.webp";

const SmallP = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 2vh;

  @media screen and (min-width: 900px) {
    display: none;
  } ;
`;

const BigP = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (max-width: 899px) {
    display: none;
  } ;
`;
const DGLogo = styled.img`
  width: 18%;
  height: 20%;
  margin-top: 10px;
  bottom: 0;
  right: 0;
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
};

const questionTheme = createTheme({
  typography: {
    h6: {
      fontSize: 'min(5vw, 30px)',
      color: "gray",
      fontStyle: "italic",
      textAlign: 'center',
      '@media (min-width:900px)': {
        fontSize: '1.1em',
      },
    },
    h5: {
      fontSize: 20,
      textAlign: 'center',
    },
  },
});

export default function CardGrid({ user }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        /**backgroundColor: "lightgray",**/
        borderRadius: 20 + "px",
        cursor: "pointer",
        boxShadow: "2px 2px 10px #D3D3D3",
      }}
    >
      <Grid container sx={{width: '100%'}}>
        <ThemeProvider theme={questionTheme}>
          <Grid xs={5}>
            <SmallP src={user.smallImage} />
            <BigP src={user.image} />
          </Grid>
          <Grid xs={7} sx={{ py: '2em', px: '1em' }}>
            <Typography variant="h5" guttomButtom>
              {user.name}
            </Typography>
            <Typography variant="h6" guttomButtom>
              {user.post}
            </Typography>
            <Typography variant="h6" guttomBottom>
              <a href={"mailto:" + user.email}>{user.email}</a>
            </Typography>
            <DGLogo src={dg_logo}></DGLogo>
          </Grid>
        </ThemeProvider>
      </Grid>

      <Modal open={open} onClose={handleClick}>
        <Box sx={style}>
          <Grid container>
            <Grid xs={12}>
              <img
                src={user.image}
                alt="Gropies"
                height="300vh"
                width="300vh"
                style={{
                  marginTop: 10,
                  marginLeft: 25,
                  objectFit: "cover",
                  borderRadius: 100 + "%",
                }}
              />
            </Grid>

            <Grid xs={12}>
              <Frågor user={user} />
            </Grid>
            <Grid>
              <Button variant="contained" onclick={handleClick} sx={{ ml: 17 }}>
                close
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
