import "./add.css"
import React from 'react';
import {Form,Col,Row} from 'react-bootstrap'
const Add = () => {
    return (
        <div>
            <Form>
       <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label column sm="2">
                        Company
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="plaintext" placeholder="enter comic name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label column sm="2">
                        comic name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control  type="plaintext" placeholder="enter number of copies" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label column sm="2">
                       quantity 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="plaintext" placeholder="enter comic price " />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label column sm="2">
                        price
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="plaintext" placeholder="enter company name" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Add;
