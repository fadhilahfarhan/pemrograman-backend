// import express
const express = require("express");

//import .env
require("dotenv").config()

// import router
const router = require("./routes/api");

// membuat objek express
const app = express();

//menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

//menggunakan routing (router)
app.use(router);

// mendefinisikan port menggunakan .env
const PORT = process.env.APP_PORT
app.listen(PORT, () => 
    console.log(`Server running at: http://localhost:${PORT}`)
)