import React, { useState } from 'react'
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

/**
* @author
* @function Signup
**/

const Signup = (props) => {

    const [firstName, setFname] = useState('');
    const [lastName, setLname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPass] = useState('');

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const user = useSelector(state=> state.user);

    if(auth.authenticate) {
        return <Redirect to="/"/>
    }

    const userSignup = (e) => {
        e.preventDefault()
        const user =  {
            firstName,
            lastName,
            Email,
            Password
        }
        dispatch(signup(user));

    }
    if(user.loading) {
        return <p>loading...!</p>
    }

    return (
        <>
            <Layout>
                <Container>
                    <h1>{user.message}</h1>
                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userSignup}>
                                <Row >
                                    <Col>
                                        <Input
                                            label="Fist name"
                                            placeholder="First Name"
                                            value={firstName}
                                            type="text"
                                            onChange={(e) => setFname(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            label="Fist name"
                                            placeholder="First Name"
                                            value={lastName}
                                            type="text"
                                            onChange={(e) => setLname(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    placeholder="Email ID"
                                    value={Email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value={Password}
                                    type="password"
                                    onChange={(e) => setPass(e.target.value)}
                                />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                    </Row>

                </Container>
            </Layout>
        </>
    )

}

export default Signup