const express = require('express');
const { connectMongo } = require('./src/database/db');
const app = express();
const bodyParser = require('body-parser');
const router = require('./src/router/router');
const cors = require("cors")
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

async function main() {
    await connectMongo();

    app.use('/api',router);
    app.get('*',(req,res)=>{
        res.send('Error 404')
    });

    app.listen(8000,error=>{
        console.log(error)
    })
}

main()