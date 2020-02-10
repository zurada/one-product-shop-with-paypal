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

            this.currency === 'CHF' ?
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                            <input type="image" src="https://www.paypalobjects.com/de_DE/CH/i/btn/btn_buynowCC_LG.gif" width="150px" height="auto" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal."/>
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>
            :
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                    <input type="image" src="https://www.paypalobjects.com/de_DE/CH/i/btn/btn_buynowCC_LG.gif" width="150px" height="auto" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal."/>
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>



    )
    }
}

export default Paypal;