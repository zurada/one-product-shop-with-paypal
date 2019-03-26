import React from 'react';
import Intro from "./components/Intro";
import StickyNavbar from "./components/StickyNavbar";
import About from "./components/About";
import Buy from "./components/Buy";
import WOW from "wowjs";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Locale from "./components/Locale";

class App extends React.Component {


    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    refresh(){
        this.setState({});
    }

    render() {
        return (
            <div className="wow fadeIn">
                <Intro/>
                <Locale refresh={this.refresh}/>
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