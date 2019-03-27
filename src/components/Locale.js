import React from 'react';
import config from '../config/config';
import {Badge, Button, ButtonGroup} from "reactstrap";

class Locale extends React.Component {

    constructor(props) {
        super(props);
        this.refresh = props.refresh;
        this._onSetLanguageTo = this._onSetLanguageTo.bind(this);
    }

    _onSetLanguageTo(lang) {
        config.translation.setLanguage(lang);
        this.refresh();
    }

    render() {
        return (
            <div className="fixed-bottom">
                <ButtonGroup className="btn-group-sm float-right">
                    <Button onClick={() => this._onSetLanguageTo("en")}>EN</Button>
                    <Button onClick={() => this._onSetLanguageTo("de")}>DE</Button>
                    <Button onClick={() => this._onSetLanguageTo("pl")}>PL</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default Locale;