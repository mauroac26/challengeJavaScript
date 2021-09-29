const express = require('express');
const presupuesto = require('../models/presupuesto');
const router = express.Router();

const Presupuesto = require('../models/presupuesto');

// router.get('/', async (req, res) => {
//     try {
//         const presupuestos = await Presupuesto.findAll();
//         res.json({
//             data: presupuestos
//         });
//     }catch(e) {
//         console.log(e);
//     }
    
// });

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const presupuesto = await Presupuesto.findOne({
        where: {
            id
        }
        });
    res.json(presupuesto);
});

router.post('/', async (req, res) => {
    const { concepto, monto, fecha, tipo } = req.body;
    try {
        let newPresupuesto = await Presupuesto.create({
            concepto, 
            monto, 
            fecha, 
            tipo
        }, {
            fields: ["concepto", "monto", "fecha", "tipo"]
        });
    if (newPresupuesto){
        return res.json({
            message: 'Presupuesto creado correctamente',
            data: newPresupuesto
        });
    }
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {}
        });
    }
    

});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { concepto, monto, fecha, tipo } = req.body;
    const presupuestos = await Presupuesto.findAll({
        attributes: ["id", "concepto", "monto", "fecha", "tipo"],
        where: {
            id
        }
    });
    if (presupuestos.length > 0){
        presupuestos.forEach(async presupuesto => {
            await presupuesto.update({
                concepto,
                monto,
                fecha,
                tipo
            });
        });
    }
    res.json({
        message: "Presupuesto actualizado",
        data: presupuestos
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleterow = await Presupuesto.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Profecto eliminado",
        count: deleterow
    });
});

module.exports = router;


