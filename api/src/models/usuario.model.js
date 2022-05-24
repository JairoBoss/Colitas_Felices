const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuarioSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  Personas: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Personas'
  }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);