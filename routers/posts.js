const express = require('express')

//creazione routing
const router = express.Router();


//Index (lista posts)
router.get('/', (req,res) => {
    res.send('lista dei miei posts')
})

//posts  (CREAZIONE ROTTA DINAMICA CON :ID)
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`post con id n. ${id}`)
});

router.post('/', (req, res) => {
    res.send('creazione nuovo post')
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`modifica integrale del post con id n. ${id}`)
} )

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`cancellazione totale post con id n. ${id}`)
});



module.exports = router;


