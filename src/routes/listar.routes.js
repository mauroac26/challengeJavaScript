const express = require('express');
const presupuesto = require('../models/presupuesto');
const router = express.Router();

const Presupuesto = require('../models/presupuesto');

router.get('/', async (req, res) => {
    try {
        const presupuestos = await Presupuesto.findAll();
        res.json(presupuestos);
    }catch(e) {
        console.log(e);
    }
    
});

module.exports = router;