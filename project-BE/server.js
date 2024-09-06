const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const credentialsRouter = require("./routes/credentialsRoutes");
const connect = require("./database/database");

//Allow to 
require('dotenv').config();

const PORT = process.env.PORT;


//config cors
const corsOptions = {
    origin : ['http://localhost:5173'],
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}

//config express
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors(corsOptions));

//use router
app.use('/credentials', credentialsRouter)

//end use router

app.get('/', (req, res) => {
    res.send('Get Request Successfull');
});
 
app.listen(PORT, () => {
    connect()
    console.log(`Server is established at port -> ${PORT}`);
});