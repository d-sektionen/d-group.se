import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

const App = () => {
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route exact path="/calendar" element={<FestKalender/>} />
        {/* fester pathen används ej */}
        <Route exact path="/fester" element={<EventsGrid/>} />
        <Route exact path="/pateter" element={<WallofFame/>} />
        <Route exact path="/groupies" element={<Groupies/>} />
        <Route exact path="/friends" element={<Ourfriends/>} />
        <Route exact path="/movies" element={<TaggfilmerNy/>} />
        <Route exapt path="/kontakt" element={<Contact />} />
        <Route exapt path="/test" element={<Test />} /> 
      </Routes>

      
    </Router>
  );
};

export default App;
