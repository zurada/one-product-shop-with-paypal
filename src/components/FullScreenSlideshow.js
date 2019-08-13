import React, {Component} from 'react';
import Slideshow from "./Slideshow";
import fullSlide1 from "../img/full_slide1.jpg";
import fullSlide2 from "../img/full_slide2.jpg";
import fullSlide3 from "../img/full_slide3.jpg";
import {Col, Row} from 'reactstrap';
import config from "../config/config";


class FullScreenSlideshow extends Component {

    render() {
        let translation = config.translation.fullScreenSlideShow;
        this.items = [
            {
                src: fullSlide1,
                altText: '',
                caption: translation.inspire1,

            },
            {
                src: fullSlide2,
                altText: '',
                caption: translation.inspire2,

            },
            {
                src: fullSlide3,
                altText: '',
                caption: translation.inspire3,
            }
        ];
        return (
            <Row className="intro-full-page justify-content-center align-items-center">
                <Col md="12">
                    <Slideshow items={this.items} hasGradient={true}/>
                </Col>
            </Row>
        )
    }
}

export default FullScreenSlideshow;