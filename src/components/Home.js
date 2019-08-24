import React from 'react';
import About from "./About";
import Intro from "./Intro";
import StickyNavbar from "./StickyNavbar";
import Buy from "./Buy";
import WOW from "wowjs";
import Who from "./Who";
import Contact from "./Contact";
import Locale from "./Locale";
import FullScreenSlideshow from "./FullScreenSlideshow";

class Home extends React.Component {


    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    refresh() {
        this.setState({});
    }

    render() {
        return (
            <div className="wow fadeIn">
                <header>
                    <Intro/>
                    <FullScreenSlideshow/>
                </header>
                <Locale refresh={this.refresh}/>
                <div>
                    <StickyNavbar/>
                    <About/>
                    <Buy currency={this.props.match.params.id}/>
                    <Who/>
                    <Contact/>
                </div>

            </div>
        );
    }
}

export default Home;