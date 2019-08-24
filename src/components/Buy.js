import React from 'react';
import {Col, Container, Row} from "reactstrap";
import "./Buy.css";
import BuySuccessModal from "./BuySuccessModal";
import config from '../config/config';
import Paypal from "./Paypal";
import {
    withRouter
} from 'react-router-dom'

class Buy extends React.Component {

    state = {
        options: [
            {
                name: "CHF - 14.90",
                value: "CHF",
            },
            {
                name: "EUR - 12.90",
                value: "EUR",
            }
        ],
        currentCurrency: "?",
    };

    constructor(props) {
        super(props);
        this.currency = props.currency || config.paypal.default_currency;
        this.state.currentCurrency = this.currency;
        this.buySuccessModal = React.createRef();
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    getLanguage() {
        let currentLanguage = config.translation.getLanguage();
        return config.paypal.languages[currentLanguage];
    }

    changeCurrency(event){
        this.props.history.push('/'+event.target.value+"#buy");
        window.location.reload();
    }

    render() {
        let translation = config.translation.buy;
        const { options, currentCurrency } = this.state;
        return (
            <section id="buy" className="buy-section">
                <Container>
                    <Row>
                        <Col md={{size: 8, offset: 2}} className="text-center wow animated fadeInUp" sttle="disabled">
                            <p className="white">{translation.text_1} <b>{translation.bold_1}</b>
                                {translation.text_2} <b> {translation.bold_2} </b>
                            </p>
                            <BuySuccessModal ref={this.buySuccessModal}/>
                            <div className="form-group">
                                <select className="form-control" onChange={this.changeCurrency} value={currentCurrency}>
                                    {options.map(item => (
                                        <option key={item.value} value={item.value}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {config.paypal.disabled &&
                            <h1 className="white">Coming soon!</h1> }

                            <div style={{opacity: config.paypal.disabled ? 0.2 : 1.0, disabled: config.paypal.disabled, pointerEvents: config.paypal.disabled ? 'none' : ''}}>
                                <Paypal currency={currentCurrency} amount={currentCurrency === 'EUR' ? 12.99 : 14.99}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(Buy);