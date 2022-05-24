const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InstitucionSchema = new Schema({
  nombre: {
    type: String
  },
  direccion: {
    type: String
  },
  rfc: {
    type: String
  },
  descripcion: {
    type: String
  },
  linksImagenes: [{
    type: String
  }]
});

module.exports = mongoose.model("Institucion", InstitucionSchema);