const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(require('cors')());

app.use(express.json());

const router = require('./src/router');
app.use(router);

const { connectDatabase } = require('./src/config/initDatabase.js');

connectDatabase
    .then(() => {

        console.log('Database connected!');
        
        app.listen(process.env.PORT, () => console.log(`App is listening on port: ${process.env.PORT}`));
        
    })
    .catch((err) => {

        console.log(err);

    })