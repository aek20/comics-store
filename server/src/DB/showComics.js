import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection



const show = () => {


    try {
        const data = db.collection("comicsStore").findOne({ company: 'marvel' }, function (err, obj) { console.log(obj); });
        db.save
        console.log(data)
        
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default show