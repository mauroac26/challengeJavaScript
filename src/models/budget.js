// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// var Float = require('mongoose-float').loadType(mongoose, 4);

// const presupuestoShema = new Schema({
//     concepto: { type: String, require: true },
//     monto: { type: Float, require: true },
//     fecha: { type: Date, require: true },
//     tipo: { type: String, require: true }
// });

// module.exports = mongoose.model('Presupuesto', presupuestoShema);

//const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database/database");
const { DataTypes } = require("sequelize");
sequelize = db.sequelize,
Sequelize = db.Sequelize;


const budget = sequelize.define('budget', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true
},
concept: {
    type: DataTypes.TEXT
},
amount: {
    type: DataTypes.DECIMAL(10, 2)
},
date: {
    type: DataTypes.DATE
},
type: {
    type: DataTypes.TEXT
}
  }, {
    timestamps: false,
    freezeTableName: true
  });

module.exports = budget;

