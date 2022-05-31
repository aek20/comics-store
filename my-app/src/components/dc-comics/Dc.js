import React from 'react';
import './dc.css'
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import batman from '../../img/batman.png'
import comic from '../../img/comic.png'
import dc from "../../img/dc.jpg"
import { useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const baseURL = "http://localhost:4053/show";


export default function Dc() {
    const [data, setData]= useState([{}])
  
    const navigate= useNavigate()
 
    //this method send comic data to cart database to show it in cart page
    const addToCart= async (company, name, release, quantity, price) => {
            await fetch("http://localhost:4053/add/cart", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    name: name,
                    release: release,
                    quantity: quantity,
                    company: company,
                    price: price


                })
            });
        }
    
    // https://api.github.com/users/mapbox
 
    // fetch data from server 
    useEffect(() => {
        fetch(baseURL
        )
            .then(res => res.json())
            .then(
                (result) => {
                    try {
                 

                   setData(result.comics)
             
                    } catch (err) {console.log(err)}
                })},[])
  
                // listitems will list all comics in database
    const listItems = data.map((comic) =>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{comic.name} </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary" onClick={()=>{addToCart(comic.company, comic.name, comic.release_date, comic.quantity, comic.price)}}>Add </Button>
            </Card.Body>
        </Card>
    );

    return (
        <div>
{listItems}
        </div>
      
    );
}


