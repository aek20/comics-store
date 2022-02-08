import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
import express from "express";
const app = express()
const db=mongoose.connection



const add = async (name, email, quantity, number) => {


    try {
       await  db.collection('comicsStore').insertOne({ name: name, company: email, quantity: quantity, quantity,price: number })
        db.save
    } catch (error) {
       console.log(error);
    }

    console.log("good job ")

}
export default add;