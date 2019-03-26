import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';

class Contact extends Component {

    render() {
        return (
            <section id="contact">
                <Container>
                    <Row>
                        <Col md="6" className="text-left text-center-mobile wow animated fadeInUp contact-details">
                            <h3 className="heading no-margin wow animated fadeInUp">Contact Author</h3>
                            <h4 className="subheading muted no-margin wow animated fadeInUp">Say hi or ask
                                something.</h4>
                            <div className="details">
                                <h6 className="heading no-margin">Nicolas Adamson</h6>
                                <p className="small muted wow animated fadeInUp no-margin">3125 Flanigan Oaks
                                    Drive <br/>
                                    Capitol Heights, MD 20027</p>
                            </div>
                            <div className="details">
                                <h4 className="subheading accent no-margin wow animated fadeInUp">+ 301 324 9131 <br/>
                                    info@nicolasadamson.com</h4>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }

}

export default Contact;