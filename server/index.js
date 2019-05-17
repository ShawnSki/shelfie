require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

// env variables
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

// server setup
const app = express();
app.use(express.json());

// database connection
massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('⛷ Freshies! Database connected.')
    })
    .catch(error => {
        if (error) throw error;
    });

// end points
app.get('/api/inventory', controller.getAllProducts);


// app is listening
app.listen(SERVER_PORT, () => {
    console.log(`🤙 Aloha and mahalo on port: ${SERVER_PORT}`);
});