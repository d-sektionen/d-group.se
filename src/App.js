import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import FestKalender from "./Pages/FestKalender";
import EventsGrid from "./components/fester/index";
import Navbar from "./components/Navbar";
import Ourfriends from "./components/Friends";
import Start from "./components/Start";
import Contact from "./components/Kontakt";
import WallofFame from "./components/WoF";
import TaggfilmerNy from "./components/Taggfilmer";
import Groupies from "./components/Groupies";
import Test from "./components/test";

import KastaPil from "./components/kastaPil";

const App = () => {

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/calendar" element={<FestKalender/>} />
        {/* fester path is not used */}
        <Route path="/fester" element={<EventsGrid/>} />
        <Route path="/pateter" element={<WallofFame/>} />
        <Route path="/groupies" element={<Groupies/>} />
        <Route path="/friends" element={<Ourfriends/>} />
        <Route path="/movies" element={<TaggfilmerNy/>} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/test" element={<Test />} />

        <Route path="/kastapil" element={<KastaPil />} />
        <Route path="*" element={
          <Box component="main" sx={{ mt: 12, px: 2, textAlign: "center" }}>
            <Typography variant="h4" component="h1" gutterBottom>Sidan hittades inte</Typography>
            <Typography paragraph>Adressen finns inte. Gå till startsidan för att hitta rätt.</Typography>
            <Button component={Link} to="/" variant="contained">Till startsidan</Button>
          </Box>
        } />
      </Routes>


    </Router>
  );
};

export default App;
