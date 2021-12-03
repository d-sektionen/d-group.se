import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Start from "./Pages/Start";
import FestKalender from "./Pages/FestKalender";
import Fester from "./Pages/Fester";
import HoF from "./Pages/HoF";
import GroupieGrid from "./components/gropieGrid";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer/index.js";
import test from "./Pages/Test";
import Ourfriends from "./components/Friends"
import taggfilmer from "./components/taggfilmer";


const App = () => { 
    return(
        <Router>
            <div className="App">
                <div className="Navbar">
                  <Header/>
                
                </div>

                <div className="Content">
                    <Route exact path="/" component={Start} />
                    <Route exact path="/festkalender" component={FestKalender} />
                    <Route exact path="/fester" component={Fester} />
                    <Route exact path="/WoF" component={HoF} />
                    <Route exact path="/groupies" component={GroupieGrid}/>
                    <Route exact path="/test" component={test}/>
                    <Route exact path="/friends" component={Ourfriends}/>
                    <Route exact path="/movies" component={taggfilmer}/>
                </div>
                <div className="Footer">
                    <Footer/>
                </div>
            </div>
        </Router>

                                
    );
};

export default App;