import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './signIn.css'
import img from '../../img/welcome.png'
export default function SignIn() {
    return (
        <div>
            <img src={img} className="background" alt='Welcome' />
        <h1 className="text">Welcome Again <br />Batman</h1>
            <Form>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" >SUBMIT
                </Button>


            </Form>

        </div>
    )
}