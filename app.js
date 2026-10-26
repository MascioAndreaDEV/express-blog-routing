//iMPORT
const express = require('express')

//SETUP

const app = express();
const port = 3000;


//abilitazione public:
app.use(express.static('public'));

// ROUTING

//Home
app.get('/', (req, res) => {
    res.send('Server of my blog')
})


//posts 
app.get('/posts', (req, res) => {
    res.send('Lista dei miei post')
})




//start server (LISTENER)
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
    
})

