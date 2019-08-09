import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import "./Who.css";
import author from "../img/author.png"
import config from "../config/config";
class Who extends Component {

    render() {
        let translation = config.translation.who;
        return (
            <section id="who">
                <Container>
                    <Row>
                        <Col md="6">
                            <Row className="author">
                                <Col lg="4" md="5" sm="12">
                                    <img src={author} alt="" className="pic"/>
                                </Col>
                                <Col lg="8" md="7" sm="12">
                                    <h2 className="heading wow animated fadeInUp">{translation.title}</h2>
                                    <h4 className="subheading muted wow animated fadeInUp">
                                        {translation.subtitle}
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <h3 className="subheading gray wow animated fadeInUp">
                                        {translation.description}
                                    </h3>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{size: 4, offset: 2}}>
                            <p className="small muted-light wow animated fadeInUp">{translation.description_right}</p>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }

}

export default Who;