const express = require('express');
const router = express.Router();

const Presupuesto = require('../models/presupuesto')

router.get('/', async (req, res) => {
    const presupuestos = await Presupuesto.find();
    res.json(presupuestos);
});

router.get('/:id', async (req, res) => {
    const presupuesto = await Presupuesto.findById(req.params.id);
    res.json(presupuesto);
});

router.post('/', async (req, res) => {
    const { concepto, monto, fecha, tipo } = req.body;
    const presupuesto = new Presupuesto({concepto, monto, fecha, tipo});
    await presupuesto.save();
    res.json({status: 'Presupuesto guardado'});
});

router.put('/:id', async (req, res) => {
    const { concepto, monto, fecha, tipo } = req.body;
    const newPresupuesto = { concepto, monto, fecha, tipo };
    await Presupuesto.findByIdAndUpdate(req.params.id, newPresupuesto)
    res.json({status: "Presupuesto actualizado"});
});

router.delete('/:id', async (req, res) => {
    await Presupuesto.findByIdAndRemove(req.params.id);
    res.json({status: 'Presupuesto Eliminado'});
});

module.exports = router;


