const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PersonaSchema = new Schema({
  nombres: {
    type: String,
    required: true,
  },
  apellidoPaterno: {
    type: String,
    required: true,
  },
  apellidoMaterno: {
    type: String,
  },
  telefono: {
    type: String,
  },
  direccion: {
    type: String,
  },
});

module.exports = mongoose.model("Persona", PersonaSchema);
