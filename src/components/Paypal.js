import React from 'react';
import "./Buy.css";
import {PayPalButton} from "react-paypal-button-v2";
import config from '../config/config';

class Paypal extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        this.currency = this.props.currency;
        this.amount = this.props.amount;
        return (
            <PayPalButton
                amount={this.amount}
                currency={this.currency}
                onSuccess={(details, data) => {
                    this.buySuccessModal.current.open(data.orderID);
                }}
                options={{
                    currency: this.currency,
                    clientId: config.paypal.clientId
                    //OPTIONAL: now choose the browser locale, else: locale: this.getLanguage()
                }}
            />
        )
    }
}

export default Paypal;