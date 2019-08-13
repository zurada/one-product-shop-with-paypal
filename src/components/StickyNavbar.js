import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import "./StickyNavbar.css";
import config from "../config/config";

class StickyNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };

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
                            <NavLink href="#buy" className=" btn btn-green">{translation.buy}</NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default StickyNavbar;