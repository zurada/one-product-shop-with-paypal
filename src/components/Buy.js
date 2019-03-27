import React from 'react';
import {Col, Container, Row} from "reactstrap";
import "./Buy.css";
import {PayPalButton} from "react-paypal-button-v2";
import BuySuccessModal from "./BuySuccessModal";
import config from '../config/config';

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.buySuccessModal = React.createRef();
    }

    render() {
        let translation = config.translation.buy;
        return (
            <section id="buy" className="buy-section">
                <Container>
                    <Row>
                        <Col md={{size: 8, offset: 2}} className="text-center wow animated fadeInUp">
                            <p className="white">{translation.text_1} <b>{translation.bold_1}</b>
                                {translation.text_2} <b> {translation.bold_2} </b>
                            </p>
                            <BuySuccessModal ref={this.buySuccessModal}/>
                            <PayPalButton
                                amount="20.00"
                                onSuccess={(details, data) => {
                                    this.buySuccessModal.current.open(data.orderID);
                                }}
                                options={{
                                    currency: config.paypal.currency,
                                    clientId: config.paypal.clientId
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Buy;