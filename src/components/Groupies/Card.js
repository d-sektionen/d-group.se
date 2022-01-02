import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import Frågor from "./Information";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "90vw",
  height: "65vh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign:"center"
};

export default function CardGrid({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{ backgroundColor: "lightgray", borderRadius: 10, cursor: "pointer", border: "#754022 5px solid", alignItems:"center" }}
    >
      <Grid>
        <img
          src={user.image}
          alt="Gropies"
          style={{ width: "15vw", marginTop: 8, borderRadius: 50 + "%" }}
        />
        <Typography variant="h6" guttomButtom>
          {user.name}
        </Typography>
        <Typography variant="h6" guttomButtom>
          {user.post}
        </Typography>
        <Typography variant="h6" guttomBottom>
          <a href={"mailto:" + user.email}>{user.email}</a>
        </Typography>
      </Grid>
      <Modal open={open} onClose={handleClick}>
        <Box sx={style}>
          <Grid container>
            <img
              src={user.image}
              xs={12} md={6}
              alt="Gropies"
              style={{
                width: "30vw",
                marginTop: 8,
                borderRadius: 50 + "%",
              }}
            />
            <Frågor xs={12} md={6}user={user} />
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
