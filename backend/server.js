const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Here');
    res.download('server.js');

})

app.listen(3000)