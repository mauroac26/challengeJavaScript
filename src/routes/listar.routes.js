const express = require('express');
const presupuesto = require('../models/presupuesto');
//const presupuesto = require('../models/presupuesto');
const router = express.Router();

const Presupuesto = require('../models/presupuesto');

router.get('/', async (req, res) => {
    try {
        const presupuestos = await Presupuesto.findAll({order: [['fecha', 'DESC']], limit: 10});
        // let i = presupuestos.length - 10;
        //   presupuestos.splice(0, i);
        res.json(presupuestos);
    }catch(e) {
        console.log(e);
    }
    
});


module.exports = router;