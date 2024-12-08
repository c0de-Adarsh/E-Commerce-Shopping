const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//require('dotenv').config();
const multer = require('multer')
const db = require('./db')
const cookieParser =  require('cookie-parser');
const cors = require('cors')

const PORT = process.env.PORT || 5000;

app.use(
    cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders:[
        'Content-type',
        'Authorization',
        'Cache-control',
        'Expires',
        'Pragma',
    ],
    credentails: true
})
)

app.use(cookieParser());

app.use(express.json())

app.listen(PORT,()=>{
    console.log('Server is up and running on the port 5000')
})