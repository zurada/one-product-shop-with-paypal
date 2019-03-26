import React from 'react';
import {Col, Container, Row} from "reactstrap";
import "./Buy.css";

class Buy extends React.Component {
    render() {
        return (

            <section id="buy" className="buy-section">
                <Container>
                    <Row>
                        <Col md={{size: 8, offset: 2}} className="text-center wow animated fadeInUp">
                            <p className="white">You can pay using your <b>credit card</b> or <b> Paypal account.</b>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Buy;