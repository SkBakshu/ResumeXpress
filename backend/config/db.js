import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://bakshua0:resume123@cluster0.hnqpxvb.mongodb.net/RESUME')
    .then(() => console.log('DB CONNECTED'))
}