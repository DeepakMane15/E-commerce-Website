import React, { Component, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
import slider4 from './images/slider4.jpg';
import slider5 from './images/slider5.jpg';
import slider6 from './images/slider6.jpg';
import slider7 from './images/slider7.jpg';
import ng from './images/ng.jpg';
import { GiHamburgerMenu } from "react-icons/gi";

import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Row, Col, SideBar } from 'react-bootstrap';

function Home() {


    const [open, setOpen] = useState(false);

  return (
        <div>
            <Container fluid>
                <Row style={{ marginTop: "63px", backgroundColor: "#133b55" }}>
                    <Col>
                        <Navbar variant="dark" expand="lg" style={{ zIndex: "1" }}>
                            
                        <Button 
      className="sidebar-button btn btn-link"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <GiHamburgerMenu />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="sidebar active">
       
                                <ul>
                                    <li>
                                        <a href="#">Profile</a>
                                        <a href="#">Hot summer</a>
                                        <a href="#">Trending</a>
                                        <a href="#">Categories</a>
                                        <a href="#">Offers</a>
                                        <a href="#">Cart</a>
                                        <a href="#">Orders</a>
                                    </li>
                                </ul>

                            
                            </div>
            
      </Collapse>


                            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            
                            
                            {open}

                                <Nav
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >

                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>

                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>


                    </Col>
                </Row>
            </Container>


            {/* //Slider */}
            <div>
                <section style={{ backgroundImage: `url(${ng})`, width: "100%" }}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <Container>
                                <div className="carousel-item active">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18 rem" }}>
                                                <img className="card-img-top" src={slider1} alt="Card image cap"></img>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img className="card-img-top" src={slider2} alt="Card image cap"></img>
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img className="card-img-top" src={slider3} alt="Card image cap"></img>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18 rem" }}>
                                                <img className="card-img-top" src={slider4} alt="Card image cap"></img>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img className="card-img-top" src={slider5} alt="Card image cap"></img>
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img className="card-img-top" src={slider6} alt="Card image cap"></img>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </Container>
                        </div>
                    </div>



                </section>
            </div>
        </div>
    )

}
export default Home