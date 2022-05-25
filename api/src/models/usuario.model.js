const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuarioSchema = new Schema({
  correo: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  persona: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Persona'
  }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);