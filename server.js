'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is Running');
})

app.listen(port, () => {
    console.log(`journal app server running on port: ${port}`);
});