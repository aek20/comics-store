import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection


const deleteCom = async () => {


    try {
     await   db.collection("comicsStore").deleteOne({ _id: mongoose.Types.ObjectId("61eb2dcbf2d42b4b28326940") }, function (err) {
            if (err) {
                console.log(err)
                return handleError(err);}
            // deleted at most one tank document
        });
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
export default deleteCom