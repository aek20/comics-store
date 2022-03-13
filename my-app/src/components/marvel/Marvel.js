import React from 'react'
import marvel from '../../img/marvel.jpg'
import {  Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./marvel.css"
export default function Marvel() {
  return (
      <div>
          <div className="coming-cards">
            <img src={marvel} className="background" alt="marvel comics section"/>  
            <h1 className="coming-soon">marvel comics</h1>

              <Container >

                  <Row>
                      {/* first card  */}
                      <Col xs >

                          <Card className="card" style={{ width: '18rem' }}>
                              <Card.Img className="img" variant="top" src={marvel} />
                              <Card.Body>
                                  <Card.Title>{marvel}</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the bulk of
                                      the card's content.
                                  </Card.Text>
                                  <Button className="click" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </Col>
                      {/* second card */}
                      <Col xs={{ order: 12 }}>
                          <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={marvel} />
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
                              <Card.Img variant="top" src={marvel} />
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

  )
}
