import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import {  login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { isUserLoggedIn } from '../../actions';
import {Redirect} from 'react-router-dom';


const Signin = (props) => {

    const[Email,setEmail] = useState('');
    const[Password,setPassword] = useState('');
    const[error,setError] = useState('');
    const auth=useSelector(state => state.auth);
    const dispatch = useDispatch();

    

    const userLogin = (e) => {
        
        e.preventDefault();
        const user = {
            Email,
            Password
        }
        // console.log(user)
        dispatch(login(user));

    }

    if(auth.authenticate) {
        return <Redirect to = {'/'}/>
    }

    return (
        <Layout>
       <Container>
                 <Row style={{marginTop: "50px"}}>
                     <Col md={{span: 6, offset:3}}> 
                         <Form onSubmit={userLogin}>
                         <Input
                                    label="Email"
                                    placeholder="Email ID"
                                    value= {Email}
                                    type= "email"
                                    onChange= {(e) => setEmail(e.target.value)}
                               />

<Input
                                    label="Password"
                                    placeholder="Password"
                                    value= {Password}
                                    type= "password"
                                    onChange= {(e) => setPassword(e.target.value)}
                               />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>

            </Container>
        </Layout>

    )

}

export default Signin