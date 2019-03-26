import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Slideshow from "./Slideshow";

class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col md="6">
                            <Slideshow/>
                        </Col>
                        <Col md="6">
                            <h2 className="heading wow animated fadeInUp">About The Book</h2>
                            <h4 className="subheading wow animated fadeInUp">This lovely, well-written book is concerned
                                foremost with creating typography and is essential for professionals who regularly work
                                for
                                clients.</h4>
                            <p className="small wow animated fadeInUp">Author writes about designing with the correct
                                typeface;
                                striving for rhythm, proportion, and harmony; choosing and combining type; designing
                                pages;
                                using section heads, subheads, footnotes, and tables; applying kerning and other type
                                adjustments to improve legibility; and adding special characters, including punctuation
                                and
                                diacritical marks. </p>
                            <p className="small wow animated fadeInUp">The Elements of Typographic Style teaches the
                                history of
                                and the artistic and practical perspectives on a variety of type families that are
                                available in
                                Europe and America today.</p>
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}

export default About;