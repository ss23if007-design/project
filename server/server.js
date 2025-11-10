require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const authRouter = require("./router/auth-router");
const BookRoute = require("./router/book-router");
const servicesRoute = require("./router/services-router");
const adminRoute = require("./router/admin-router");
const ConnetDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require("cors");

const adminRouter = require("./router/admin-router");

const corsOptions = {
    origin: 'https://phoenix-salon-website-server.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/appointment", BookRoute);
app.use("/api/data", servicesRoute);

//Admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

ConnetDB().then(() => {

 app.listen(PORT, () =>{
    console.log ('Server is running on port ' + PORT);
  });
});
