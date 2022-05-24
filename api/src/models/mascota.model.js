const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MascotaSchema = new Schema({
  nombre: {
    type: String
  },
  raza: {
    type: String
  },
  tamaño: {
    type: String
  },
  sexo: {
    type: String
  },
  descripcion: {
    type: String
  },
  edad: {
    type: String
  },
  linksImagenes: [{
    type: String
  }],
  fechaNacimiento: {
    type: Date
  }
});

module.exports = mongoose.model("Mascota", MascotaSchema);