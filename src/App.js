import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";

class App extends React.Component {

    render() {
        return (
            <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/show/terms" component={TermsAndConditions} />
                <Route path="/:id" component={Home} />
            </Switch>
            </Router>
        );
    }
}

export default App;