import React from 'react';
import './dc.css'
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import batman from '../../img/batman.png'
import comic from '../../img/comic.png'
import dc from "../../img/dc.jpg"
import { useEffect,useState } from 'react';
import axios from 'axios'

const baseURL = "http://localhost:4000/show";
export default function Dc() {
    const [data, setData]= useState([{}])
    // https://api.github.com/users/mapbox
   
    useEffect(() => {
        fetch(baseURL
        )
            .then(res => res.json())
            .then(
                (result) => {
                   console.log(result)
                   setData(result)
                })},[])
    return (
        <div>
            <div className="coming-cards">
                <h1 className="coming-soon">DC comics</h1>
                <img src={dc} className="background" />
                <Container >

                    <Row>
                        {/* first card  */}
                        <Col xs >
                     
                            <Card className="card" style={{ width: '18rem' }}>
                                <Card.Img className="img" variant="top" src={comic} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button  className="click" variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* second card */}
                        <Col xs={{ order: 12 }}>
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
                        {/* third card */}
                        <Col xs={{ order: 1 }}>
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
                    </Row>
                </Container>
            </div>
        </div>
      
    );
}


