const express = require('express');

const controller = require('./controller');


const app = express();
app.use(express.json());


const PORT = 8888;
app.listen(PORT, () => {
    console.log(`🤙 Aloha and mahalo on port: ${PORT}`);
});