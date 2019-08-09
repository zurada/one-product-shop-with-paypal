import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import "./Intro.css";
import cover from "../img/cover.jpg";
import config from '../config/config';
class Intro extends Component {

    render() {
        let translation = config.translation.intro;
        return (
                <Container className="container-fluid h-100">
                    <Row className="intro-full-page justify-content-center align-items-center">
                        <div className="img-grey-overlay"/>
                        <Col md="6" sm="12" xs="12">
                            <div className="intro-book wow animated fadeInDown">
                                <img className="wow animated fadeIn" src={cover} alt=""/>
                            </div>
                        </Col>
                        <Col md="6" sm="12" xs="12" className="intro-text ">
                            <h2 className="wow animated fadeInDown heading">{translation.title}</h2>
                            <h4 className="authorName fadeInDown ">{translation.subtitle}</h4>
                            <p>{translation.description}</p>
                            <Button href="#about" className="wow animated fadeInDown scrollto btn btn-white">
                                {translation.button_about}
                            </Button>
                            <Button href="#buy" className="wow animated fadeInDown btn btn-green">{translation.button_buy}<span
                                className="price">{translation.button_buy_price}</span></Button>
                        </Col>
                    </Row>
                </Container>
        );
    }

}

export default Intro;