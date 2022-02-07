import "./add.css"
import React from 'react';
import {Form,Col,Row} from 'react-bootstrap'
const Add =  async() => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
sending()
    }
    let sending = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
            name: "name",
            email: "email",
            mobileNumber: "mobileNumber",
        }),
    });

    return (
        <div>
            <Form onSubmit={handleSubmit}>
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
                <button>ADD</button>
            </Form>
        </div>
    );
}




export default Add;
