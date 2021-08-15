import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Start from "./Pages/Start";
import FestKalender from "./Pages/FestKalender";
import Fester from "./Pages/Fester";
import HoF from "./Pages/HoF";
import CurrDG from "./Pages/CurrentDG";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import test from "./Pages/Test";



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
                    <Route exact path="/groupis" component={CurrDG}/>
                    <Route exact path="/test" component={test}/>
                </div>
                <div className="Footer">
                    <Footer/>
                </div>
            </div>
        </Router>

                                
    );
};

export default App;