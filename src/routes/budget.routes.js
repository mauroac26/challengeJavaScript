const express = require('express');
const router = express.Router();

const Budget = require('../models/budget');

router.get('/', async (req, res) => {
    try {
        const budgets = await Budget.findAll();
        res.json(budgets);
    }catch(e) {
        console.log(e);
    }
    
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const budget = await Budget.findOne({
        where: {
            id
        }
        });
    res.json(budget);
});

router.post('/', async (req, res) => {
    const { concept, amount, date, type } = req.body;
    try {
        let newBudget = await Budget.create({
            concept, 
            amount, 
            date, 
            type
        }, {
            fields: ["concept", "amount", "date", "type"]
        });
    if (newBudget){
        return res.json({
            message: 'Presupuesto creado correctamente',
            data: newBudget
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
    const { concept, amount, date, type } = req.body;
    const budget = await Budget.findAll({
        attributes: ["id", "concept", "amount", "date"],
        where: {
            id
        }
    });
    if (budget.length > 0){
        budget.forEach(async budget => {
            await budget.update({
                concept,
                amount,
                date
            });
        });
    }
    res.json({
        message: "Presupuesto actualizado",
        data: budget
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleterow = await Budget.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Presupuesto eliminado",
        count: deleterow
    });
});

module.exports = router;


