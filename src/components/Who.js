import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import "./Who.css";
import author from "../img/author.png"

class Who extends Component {

    render() {
        return (
            <section id="who">
                <Container>
                    <Row>
                        <Col md="6">
                            <Row className="author">
                                <Col sm="4">
                                    <img src={author} alt="" className="pic"/>
                                </Col>
                                <Col sm="8">
                                    <h2 className="heading wow animated fadeInUp">Nicolas Adamson</h2>
                                    <h4 className="subheading muted wow animated fadeInUp">Typographer, Writer,
                                        Father...</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <h3 className="subheading gray wow animated fadeInUp">Good typog­raphy is measured
                                        by how
                                        well it reinforces the meaning of the text, not by some ab­stract scale of
                                        merit.</h3>
                                    <p className="small muted-light wow animated fadeInUp">Nullam quis risus eget urna
                                        mollis
                                        ornare vel eu leo Praesent commodo cursus magna, ligula porta felis euismod
                                        semper.l
                                        nisl consectetur etonec ullamcorper nulla non metus auctor fringilla. Nullam
                                        quis risus
                                        eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod
                                        semper.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus
                                        mollis
                                        interdum.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{size: 4, offset: 2}}>
                            <h3 className="heading wow animated fadeInUp">Other author's books:</h3>
                            <ul>
                                <li><p className="small muted-light wow animated fadeInUp"> Phasellus iaculis neque </p>
                                </li>
                                <li><p className="small muted-light wow animated fadeInUp">Purus sodales ultricies</p>
                                </li>
                                <li><p className="small muted-light wow animated fadeInUp">Vestibulum laoreet porttitor
                                    sem</p></li>
                                <li><p className="small muted-light wow animated fadeInUp">Ac tristique libero volutpat
                                    at</p></li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }

}

export default Who;