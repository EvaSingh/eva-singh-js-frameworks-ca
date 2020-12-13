import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePage from "../home/HomePage";
import ContactPage from "../contact/ContactPage";
import GameDetail from "../games/GameDetail";

function Layout({children}) {
    return(
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">React CA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/game/:id" component={GameDetail} />
          </Switch>
        </Container>
      </Router>   
    );
}

export default Layout;