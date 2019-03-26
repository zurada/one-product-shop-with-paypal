import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import "./Intro.css";
import cover from "../img/cover.png";
import config from '../config/config';
class Intro extends Component {

    render() {
        return (
            <header>
                <Container>
                    <Row className="intro-full-page justify-content-center align-items-center">
                        <Col md="6" sm="12">
                            <div className="intro-book wow animated fadeInDown">
                                <img className="wow animated fadeIn" src={cover} alt=""/>

                            </div>
                        </Col>
                        <Col md="6" sm="12" className="intro-text ">
                            <h2 className="wow animated fadeInDown heading">Swiss Typography {config.translation.how}</h2>
                            <h4 className="wow animated fadeInDown subheading">Review of typefaces with examples.</h4>
                            <p>Our all time best selling book is now available in a revised and expanded second edition.
                                Swiss Typography is the definitive guide to using type in visual communication, from the
                                printed page to PC screen.</p>
                            <Button href="#about" className="wow animated fadeInDown scrollto btn btn-white">About The
                                Book</Button>
                            <Button href="#buy" className="wow animated fadeInDown btn btn-green">Purchase eBook <span
                                className="price">$11.99</span></Button>
                        </Col>
                    </Row>

                </Container>
            </header>
        );
    }

}

export default Intro;