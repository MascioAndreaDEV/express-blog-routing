//iMPORT
const express = require('express')

//DEFINIZIONE ROUTER

const postsRouter = require('./routers/posts')

//SETUP

const app = express();
const port = 3000;

//abilitazione public:
app.use(express.static('public'));


// CREAZIONE PREFISSO
app.use('/posts', postsRouter);



// ROUTING


//Home
app.get('/', (req, res) => {
    res.send('Server of my blog')
})


//start server (LISTENER)
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
    
})

