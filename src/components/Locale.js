import React from 'react';
import config from '../config/config';
import {Badge, Button, ButtonGroup} from "reactstrap";

class Locale extends React.Component {

    constructor(props) {
        super(props);
        this.refresh = props.refresh;
        this._onSetLanguageToItalian = this._onSetLanguageToItalian.bind(this);
    }

    _onSetLanguageToItalian() {
        config.translation.setLanguage('it');
        this.refresh();
    }

    render() {
        return (
            <div className="fixed-bottom">
                <ButtonGroup className="btn-group-sm float-right">
                    <Button onClick={this._onSetLanguageToItalian}>DE</Button>
                    <Button>EN</Button>
                    <Button>PL</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default Locale;