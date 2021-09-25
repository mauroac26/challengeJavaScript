const mongoose = require('mongoose');
const { Schema } = mongoose;
var Float = require('mongoose-float').loadType(mongoose, 4);

const presupuestoShema = new Schema({
    concepto: { type: String, require: true },
    monto: { type: Float, require: true },
    fecha: { type: Date, require: true },
    tipo: { type: String, require: true }
});

module.exports = mongoose.model('Presupuesto', presupuestoShema);