import React from "react";
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

const SmallP = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 2vh;

  @media screen and (min-width: 768px) {
    display: none;
  } ;
`;

const BigP = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 4px;
  margin-left: 1px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
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
  boxShadow: 24,
};

const questionTheme = createTheme({
  typography: {
    h6: {
      fontSize: 20,
      color: "gray",
      fontStyle: "italic",
      marginRight: 5,
    },
    h5: {
      fontSize: 20,
      marginRight: 10,
    },
  },
});

export default function CardGrid({ user }) {
  const [open, setOpen] = React.useState(false);
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
      <Grid container>
        <ThemeProvider theme={questionTheme}>
          <Grid xs={5}>
            <SmallP src={user.image} />
            <BigP src={user.image} />
          </Grid>
          <Grid xs={7} sx={{ py: 5 }}>
            <Typography variant="h5" guttomButtom>
              {user.name}
            </Typography>
            <Typography variant="h6" guttomButtom>
              {user.post}
            </Typography>
            <Typography variant="h6" guttomBottom sx={{ pr: 3 }}>
              <a href={"mailto:" + user.email}>{user.email}</a>
            </Typography>
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
                  borderWidth: "10px",
                  borderColor: "black",
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
