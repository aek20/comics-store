const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const express = require('express')
const app = express()
const db=mongoose.connection


module.exports  = () => {


    try {
        db.collection('comicsStore').insertOne({ name: "captian marvel ", company: 'marvel', quantity: 32, price: 100 })
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
