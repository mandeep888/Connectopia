import express from "express"
//similar to const express = require('express');
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

const app = express();

app.use(bodyParser.json({limit:"30mb" , extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:"true"}));
app.use(cors)