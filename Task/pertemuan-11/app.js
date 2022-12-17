// import express
const express = require("express");

// import router
const router = require("./routes/api");

// membuat objek express
const app = express();

//menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

//menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000);