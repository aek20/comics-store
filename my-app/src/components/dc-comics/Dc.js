import React from 'react';
import './dc.css'
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import batman from '../../img/batman.png'
import comic from '../../img/comic.png'
import dc from "../../img/dc.jpg"
import { useEffect,useState } from 'react';
import axios from 'axios'

const baseURL = "http://localhost:4049/show";
export default function Dc() {
    const [data, setData]= useState([{}])
    const [cart ,setCart] =useState([{}])
    const comics_data=[{name:"aquaman" ,release_year:"2022"} ,{name : "the dark knight" , release_year :"2010"}]
    // https://api.github.com/users/mapbox
 
    // fetch data from server 
    useEffect(() => {
        fetch(baseURL
        )
            .then(res => res.json())
            .then(
                (result) => {
                    try {
                   console.log(result.comics)

                   setData(result.comics)
                console.log(data)
                    } catch (err) {console.log(err)}
                })},[])
  
    const listItems = data.map((comic) =>
        <li key={data.toString()}>
            {comic.name}
        </li>
    );

    return (
        <div>
{listItems}
        </div>
      
    );
}


