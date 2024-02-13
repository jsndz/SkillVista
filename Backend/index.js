

import express from "express";
import bodyParser from "body-parser";

import { connect } from "./src/config/database.js";
import { PORT } from "./src/config/serverconfig.js";

import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT,  async ()=>{ 
    console.log(`server started at port ${PORT}`);
    await connect();
    console.log("MongoDB connected");
    console.log("Server started");
});