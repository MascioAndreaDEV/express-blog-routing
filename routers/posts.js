const express = require('express')

//creazione routing
const router = express.Router();


//base URL router




//posts 
router.get('/', (req, res) => {
    res.send('Lista dei miei post')
})


module.exports = router;


