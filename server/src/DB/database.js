import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
import express from "express";
const app = express()
const db=mongoose.connection


 const add = () => {


    try {
        db.collection('comicsStore').insertOne({ name: "Spider man ", company: 'marvel', quantity: 32, price: 100 })
        db.save
    } catch (error) {
       console.log(error);
    }

    console.log("good job ")

}
export default add;