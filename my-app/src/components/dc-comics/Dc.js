import React from 'react';
import './dc.css'
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import batman from '../../img/batman.png'
import { useEffect,useState } from 'react';
export default function Dc() {
    const [data, setData]= useState([])
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3911/show')
            .then(response => response.json())
            .then(data => setData(data))


        // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
    return (
        <div>
            <div className="coming-cards">
                <h1 className="coming-soon">DC comics</h1>
                <Container >

                    <Row>
                        {/* first card  */}
                        <Col xs>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={batman} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* second card */}
                        <Col xs={{ order: 12 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* third card */}
                        <Col xs={{ order: 1 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
      
    );
}


