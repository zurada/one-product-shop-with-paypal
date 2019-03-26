import React from 'react';
import {Col, Container, Row} from "reactstrap";
import "./Buy.css";
import {PayPalButton} from "react-paypal-button-v2";
import BuySuccessModal from "./BuySuccessModal";

class Buy extends React.Component {
    constructor(props) {
        super(props)
        this.buySuccessModal = React.createRef();
    }
    render() {
        return (

            <section id="buy" className="buy-section">
                <Container>
                    <Row>
                        <Col md={{size: 8, offset: 2}} className="text-center wow animated fadeInUp">
                            <p className="white">You can pay using your <b>credit card</b> or <b> Paypal account.</b>
                            </p>
                            <BuySuccessModal ref={this.buySuccessModal}/>
                            <PayPalButton
                                amount="20.00"
                                onSuccess={(details, data) => {
                                    //alert("Transaction completed by " + details.payer.name.given_name);
                                    this.buySuccessModal.current.open(data.orderID);
                                    // OPTIONAL: Call your server to save the transaction
                                    /*return fetch("/paypal-transaction-complete", {
                                      method: "post",
                                      body: JSON.stringify({
                                        orderID: data.orderID
                                      })
                                    });*/
                                }}
                                options={{
                                    currency: "CHF",
                                    clientId: "ASudgd48SDSSkudtkQAjDCkza99GKoXtaIPW66ZkTrS2v_DdabHzhkw93k3AnwvxnZ-BPmdetcSAfoyO"
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