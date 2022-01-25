import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection
const app = express()


const show = () => {


    try {
        db.collection("comicsStore").find({ company: "marvel"}, function (err,data) {
            if (err) {
                console.log(err)
                return handleError(err);
            }else{
                console.log(data)
            }
       
        });
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default show