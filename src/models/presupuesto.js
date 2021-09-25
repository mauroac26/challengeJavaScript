const mongoose = require('mongoose');
const { Schema} = mongoose;

const presupuestoShema = new Schema({
    concepto: { type: String, require: true },
    monto: { type: Float32Array, require: true },
    fecha: { type: Date, require: true },
    tipo: { type: String, require: true }
});

module.exports = mongoose.model('Presupuesto', presupuestoShema);


