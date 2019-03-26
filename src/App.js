import React from 'react';
import Intro from "./components/Intro";
import StickyNavbar from "./components/StickyNavbar";
import About from "./components/About";
import Buy from "./components/Buy";
import WOW from "wowjs";
import Who from "./components/Who";
import Contact from "./components/Contact";

class App extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        return (
            <div className="wow fadeIn">
                <Intro/>
                <div>
                    <StickyNavbar/>
                    <About/>
                    <Buy/>
                    <Who/>
                    <Contact/>
                </div>

            </div>
        );
    }
}

export default App;