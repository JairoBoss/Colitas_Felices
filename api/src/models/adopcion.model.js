const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdopcionSchema = new Schema({
  fechaAdopcion: {
    type: Date
  },
  status: {
    type: Boolean
  },
  Mascotas: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Mascotas'
  },
  Personas: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Personas'
  }
});

module.exports = mongoose.model("Adopcion", AdopcionSchema);