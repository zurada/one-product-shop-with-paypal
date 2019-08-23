import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import config from "../config/config";
import {Link } from "react-router-dom";

class Contact extends Component {

    render() {
        let translation = config.translation.contact;
        return (
            <section id="contact">
                <Container>
                    <Row>
                        <Col md="6" className="text-left text-center-mobile wow animated fadeInUp contact-details">
                            <h3 className="heading no-margin wow animated fadeInUp">{translation.title}</h3>
                            <h4 className="subheading muted no-margin wow animated fadeInUp">{translation.subtitle}</h4>
                            <div className="details">
                                <h6 className="heading no-margin">{config.contact.company_name}</h6>
                                <p className="small muted wow animated fadeInUp no-margin">
                                    {config.contact.address_street}
                                    <br/>
                                    {config.contact.address_city}</p>
                            </div>
                            <div className="details">
                                <h4 className="subheading accent no-margin wow animated fadeInUp">
                                    {config.contact.phone}
                                    <br/>
                                    {config.contact.email}</h4>
                            </div>
                            <Link to="/terms">{translation.terms_button}</Link>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }

}

export default Contact;