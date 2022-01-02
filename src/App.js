import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FestKalender from "./Pages/FestKalender";
import EventsGrid from "./components/fester/index";
import Navbar from "./components/Navbar";
import Ourfriends from "./components/Friends";
import Starttest from "./components/Start";
import Contact from "./components/Kontakt";
import WallofFame from "./components/WoF";
import TaggfilmerNy from "./components/Taggfilmer";
import TestApp from "./components/Groupies";

const App = () => {
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Starttest/>} />
        <Route exact path="/calender" element={<FestKalender/>} />
        <Route exact path="/fester" element={<EventsGrid/>} />
        <Route exact path="/pateter" element={<WallofFame/>} />
        <Route exact path="/groupies" element={<TestApp/>} />
        <Route exact path="/friends" element={<Ourfriends/>} />
        <Route exact path="/movies" element={<TaggfilmerNy/>} />
        <Route exapt path="/kontakt" element={<Contact />} />
      </Routes>

      
    </Router>
  );
};

export default App;
