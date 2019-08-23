import React from 'react';
import {Col, Container, Row} from "reactstrap";
import "./Buy.css";
import BuySuccessModal from "./BuySuccessModal";
import config from '../config/config';
import Paypal from "./Paypal";

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
        value: "CHF",
    };

    constructor(props) {
        super(props);
        this.buySuccessModal = React.createRef();
        this.refresh = props.refresh;
        this.changeCurrency = this.changeCurrency.bind(this);
        this.state.value = this.findGetParameter("currency") || this.state.value;

    }

    getLanguage() {
        let currentLanguage = config.translation.getLanguage();
        return config.paypal.languages[currentLanguage];
    }

    changeCurrency(event){
        this.setState({value: event.target.value});
        window.location.assign(this.updateURLParameter(window.location + '', "currency", event.target.value));

    }

    updateURLParameter(url, param, paramVal){
        let newAdditionalURL = "";
        let tempArray = url.split("?");
        let baseURL = tempArray[0];
        let additionalURL = tempArray[1];
        let temp = "";
        if (additionalURL) {
            tempArray = additionalURL.split("&");
            for (let i=0; i<tempArray.length; i++){
                if(tempArray[i].split('=')[0] != param){
                    newAdditionalURL += temp + tempArray[i];
                    temp = "&";
                }
            }
        }

        let rows_txt = temp + "" + param + "=" + paramVal;
        return baseURL + "?" + newAdditionalURL + rows_txt;
    }

    findGetParameter(parameterName) {
        let result = null,
            tmp = [];
        let items = window.location.search.substr(1).split("&");
        for (let index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }

    render() {
        let translation = config.translation.buy;
        const { options, value } = this.state;
        return (
            <section id="buy" className="buy-section">
                <Container>
                    <Row>
                        <Col md={{size: 8, offset: 2}} className="text-center wow animated fadeInUp">
                            <p className="white">{translation.text_1} <b>{translation.bold_1}</b>
                                {translation.text_2} <b> {translation.bold_2} </b>
                            </p>
                            <BuySuccessModal ref={this.buySuccessModal}/>
                            <div className="form-group">
                                <select className="form-control" onChange={this.changeCurrency} value={value}>
                                    {options.map(item => (
                                        <option key={item.value} value={item.value}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                                <Paypal currency={this.findGetParameter("currency") || this.state.value} amount={this.state.value === 'EUR' ? 12.99 : 14.99}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Buy;