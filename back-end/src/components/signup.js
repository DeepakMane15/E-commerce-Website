import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Container, Row, Col, ButtonGroup} from 'react-bootstrap'


class Signup extends Component {
    state = {
        Name: "",
        Email: "",
        Password: "",
        Password2: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.Name === "" || this.state.Email === "") {
            alert("All fields are mandatory!");
            return
        }

        const registered = {
            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({ Name: "", Email: "", Password: "", Password2: "" })
    }


    render() {
        return (
             
            <Container className="form-group">
                <Row style={{marginTop: "160px", textAlign: "center"}}>
                    <Col md={{span:6, offset: 3}}>
                    <h3>Sign up</h3>
                    </Col>
                </Row>
                <Row style={{marginTop: "40px"}}>
                    <Col md={{span:6, offset: 3}}>
                    <Form onSubmit={this.add}>
    
                    <Form.Group className="mb-3" controlId="formBasicEName">
    <Form.Label >Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" onChange={(e) => this.setState({Name: e.target.value})} value={this.state.Name}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({Email: e.target.value})} value={this.state.Email}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({Password: e.target.value})} value={this.state.Password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => this.setState({Password2: e.target.value})} value={this.state.Password2}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
  </Form.Group>
  <ButtonGroup   className="mb-2">
  <Button variant="primary" type="submit">
    Sign up
  </Button>
  </ButtonGroup>
</Form>

                    </Col>
                </Row>

           
</Container>


        )
    }
}

export default Signup