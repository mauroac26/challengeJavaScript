const express = require('express');
const presupuesto = require('../models/budget');
//const presupuesto = require('../models/presupuesto');
const router = express.Router();

const Budget = require('../models/budget');

router.get('/', async (req, res) => {
    try {
        const budgets = await Budget.findAll({order: [['date', 'DESC']], limit: 10});
        res.json(budgets);
    }catch(e) {
        console.log(e);
    }
    
});


module.exports = router;