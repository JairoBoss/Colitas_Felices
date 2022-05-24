const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovimientoSchema = new Schema({
  descripcion: {
    type: String
  },
  fecha: {
    type: Date
  },
  monto: {
    type: String
  },
  TipoMovimiento: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'TipoMovimiento'
  },
  Personas: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Persona'
  },
  Pagos: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Pago'
  }
});

module.exports = mongoose.model("Movimiento", MovimientoSchema);