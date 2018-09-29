import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Img from "gatsby-image";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export default class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="" light expand="md">
          <NavbarBrand href="/">
            <Img
              alt="Logo Heliski Albania"              
              resolutions={this.props.logoImage.resolutions}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-right" navbar>
              <NavItem>
                <NavLink href="/location/">Location</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/safety/">Safety</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/packages/">Packages</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.instagram.com/heliskialbania/" target="_blank"><FaInstagram /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/heliskialbania/" target="_blank"><FaFacebook /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}