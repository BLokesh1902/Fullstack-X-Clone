import express from "express"
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import connnectMongoDb from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";


dotenv.config();
// console.log(process.env .MONGODB_URI) // if we dont use the abobe line we cannot acces the varibale in the dot env file

const app=express()
const PORT=process.env.PORT || 4000

app.use(express.json())                // to parse the req.body
app.use(express.urlencoded({extended:true}))    //to parse form data
app.use(cookieParser())   //if want toaccess the data from the cookie we need this middleware

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    connnectMongoDb();
})