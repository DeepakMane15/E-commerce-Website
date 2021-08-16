import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Container, Row, Col, ButtonGroup} from 'react-bootstrap'

class Signin extends Component {

    state = {
        Email: "",
        Password: ""
    }
    login = (e) => {
        e.preventDefault();
        if (this.state.Email === "" && this.state.Password === "") {
            alert("All fields are mandatory!");
            return
        }
        const credentials = {
            Email: this.state.Email,
            Password: this.state.Password
        }
        // console.log(this.state)
        axios.post('http://localhost:4000/app/signin', credentials)
            .then(response => console.log(response.data))

        this.setState({ Email: "", Password: "" })
    }

    render() {
        return (
            
            <Container className="form-group">
                <Row style={{marginTop: "160px", textAlign: "center"}}>
                    <Col md={{span:6, offset: 3}}>
                    <h3>Login</h3>
                    </Col>
                </Row>
                <Row style={{marginTop: "40px"}}>
                    <Col md={{span:6, offset: 3}}>
                    <Form onSubmit={this.login}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({Email: e.target.value})} value={this.state.Email}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({Password: e.target.value})} value={this.state.Password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
  </Form.Group>
  <ButtonGroup   className="mb-2">
  <Button variant="primary" type="submit">
    Log in
  </Button>
  </ButtonGroup>
</Form>

                    </Col>
                </Row>

           
</Container>


        )
    }
}

export default Signin