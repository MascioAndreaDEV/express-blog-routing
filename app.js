//iMPORT
const express = require('express')

//SETUP

const app = express();
const port = 3000;

//start server (LISTENER)
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
    
})

