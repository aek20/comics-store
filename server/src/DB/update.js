import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection


const update = async () => {

    const filter = { company: 'aekkkk' };
    const update = { $set:{company :'FCIT'}}

    // `doc` is the document _before_ `update` was applied
    await db.collection("comicsStore").findOneAndUpdate(filter, update);

        // await db.collection("comicsStore").findOneAndUpdate( {name:'spider man'}, {company :'FCIT'})
        db.save
  

    console.log("good job ")

}
export default update