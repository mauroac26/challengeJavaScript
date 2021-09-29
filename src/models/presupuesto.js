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
sequelize = db.sequelize,
Sequelize = db.Sequelize;


const presupuesto = sequelize.define('presupuesto', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true
},
concepto: {
    type: Sequelize.TEXT
},
monto: {
    type: Sequelize.DECIMAL
},
fecha: {
    type: Sequelize.DATE
},
tipo: {
    type: Sequelize.TEXT
}
  }, {
    timestamps: false,
    freezeTableName: true
  });

module.exports = presupuesto;

