import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))//middleware use

app.use(express.json({limit:"16kb"})) // form data
app.use(express.urlencoded({extended:true,limit:"16kb"}))//special caracter
app.use(express.static("public")) // file and folder store in public (public is folder name)

app.use(cookieParser())


export default app