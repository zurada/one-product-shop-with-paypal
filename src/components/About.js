import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Slideshow from "./Slideshow";
import config from '../config/config';

class About extends React.Component {

    render() {
        let translation = config.translation.about;
        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col md="6">
                            <Slideshow/>
                        </Col>
                        <Col md="6">
                            <h2 className="heading wow animated fadeInUp">{translation.title}</h2>
                            <h4 className="subheading wow animated fadeInUp">{translation.description_short}</h4>
                            <p className="small wow animated fadeInUp">{translation.description_long_1}</p>
                            <p className="small wow animated fadeInUp">{translation.description_long_2}</p>
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}

export default About;