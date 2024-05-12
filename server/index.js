import express from "express" //similar to const express = require('express');
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import postRoutes from "./Routes/posts.js"

const app = express();

app.use(bodyParser.json({limit:"30mb" , extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:"true"}));
app.use(cors());
app.use(express.json());
app.use('/posts',postRoutes)

const PORT = process.env.PORT|| 5000; //process.env is a built in object that allows access to environment variables 

const CONNECTION_URL = "mongodb+srv://mandeepsinghjass:e9fY7LfzToYru6GA@memoriescluster.sskqjjt.mongodb.net/?retryWrites=true&w=majority&appName=MemoriesCluster"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


// mongoose.set('useFindAndModify', false); //to avoid error in node v12+ but now this is deprecated