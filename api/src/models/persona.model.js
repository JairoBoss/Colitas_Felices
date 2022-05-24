const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonaSchema = new Schema({
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  }
});

module.exports = mongoose.model("Persona", PersonaSchema);