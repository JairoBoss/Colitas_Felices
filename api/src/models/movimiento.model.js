const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MovimientoSchema = new Schema({
  descripcion: {
    type: String,
  },
  fecha: {
    type: Date,
  },
  monto: {
    type: String,
  },
  tipoMovimiento: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "TipoMovimiento",
  },
  persona: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Persona",
  },
  pago: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Pago",
  },
});

module.exports = mongoose.model("Movimiento", MovimientoSchema);
