import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/:id" component={Home} />
                <Route exact path="/show/terms" component={TermsAndConditions} />
            </Router>
        );
    }
}

export default App;