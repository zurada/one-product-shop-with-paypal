import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import "./StickyNavbar.css";
import {Animate} from "react-show";
import config from "../config/config";

class StickyNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isOpen: false,
            showBuyButton: false,
            currentNavBarPos: 200
        };


    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let stickyContainer = document.getElementById("navbar");
        let topPos = stickyContainer.offsetTop - window.scrollY;
        this.setState({currentNavBarPos: topPos})
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let translation = config.translation.navbar;
        return (
            <Navbar id="navbar" light expand="md" sticky="top" className="navbar navbar-default">
                {/*
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
*/}
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#about">{translation.about}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#who">{translation.who}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">{translation.contact}</NavLink>
                        </NavItem>
                        <NavItem>

                            <Animate
                                show={this.state.currentNavBarPos <= 0}
                                duration={200}
                                style={{
                                    "white-space": "nowrap",
                                    width: "auto",
                                    display: "inline-block",
                                    height: "auto"
                                }}
                                enter={{
                                    "white-space": "nowrap",
                                    width: "auto",
                                    display: "inline-block",
                                    height: "auto"

                                }}
                                start={{
                                    "white-space": "nowrap",
                                    width: 0,
                                    opacity: 0,
                                    height: 0
                                }}
                            >
                                <NavLink href="#buy" className=" btn btn-green">{translation.buy}</NavLink>
                            </Animate>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default StickyNavbar;