import React from "react";
import { Grid, Modal, Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
import Frågor from "./Information";

const SmallP = styled.img`
  width: 40vw;
  height: 25vh;
  border-radius: 10%;
  margin-top:2vh;
  @media screen and (min-width: 768px) {
    display: none;
  } ;
`;

const BigP = styled.img`
  width: 15vw;
  height: auto;
  padding-top: 2;
  border-radius: 50%;

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
  border: "3px solid #000",
  boxShadow: 24,
};

export default function CardGrid({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        backgroundColor: "lightgray",
        borderRadius: 10,
        cursor: "pointer",
        border: "#754022 5px solid",
      }}
    >
      <Grid container>
        <Grid xs={6}>
          <SmallP src={user.image}/>
          <BigP src={user.image} />
        </Grid>
        <Grid xs={6} sx={{ py: 5 }}>
          <Typography variant="h6" guttomButtom>
            {user.name}
          </Typography>
          <Typography variant="h6" guttomButtom>
            {user.post}
          </Typography>
          <Typography variant="h6" guttomBottom sx={{ pr: 3 }}>
            <a href={"mailto:" + user.email}>{user.email}</a>
          </Typography>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClick}>
        <Box sx={style}>
          <Grid container>
            <Grid xs={12}>
              <img
                src={user.image}
                alt="Gropies"
                height="300vh"
                width="auto"
                style={{
                  marginTop: 1,
                  borderRadius: 50 + "%",
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
