import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';


class Header extends Component {
  render(){
    return(
      <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">BranBay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/Account">Account</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Furnitures</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Others</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.6">All Items</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
export default Header;
