const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

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


//end use router

app.get('/', (req, res) => {
    res.send('Get Request Successfull');
});
 
app.listen(PORT, () => {
    console.log(`Server is established at port -> ${PORT}`);
});