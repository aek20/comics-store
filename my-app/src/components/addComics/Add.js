import "./add.css"
import React from 'react';
import {Form,Col,Row} from 'react-bootstrap'
const Add =  () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        sending(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value)


    }
    let sending = async (company, name, release,quantity ,price )=>{
    await fetch("http://localhost:4050/add", {
    method: "POST",
        headers: {
           'Content-Type': 'application/json'
        },
    body: JSON.stringify({
     
            name: name,
        release: release,
            quantity:quantity,
        company: company , 
        price:price
        

    })
});
}
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
                     release date
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="plaintext" placeholder="enter comic price " />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label column sm="2">
                        quantity 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="plaintext" placeholder="enter company name" />

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
                <button >ADD</button>
                
            </Form>
        </div>
    );
}




export default Add;
