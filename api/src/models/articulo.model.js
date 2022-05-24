const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticuloSchema = new Schema({
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  },
  precio: {
    type: String
  },
  linksImagenes: [{
    type: String
  }],
  Categoria: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Categoria'
  }
});

module.exports = mongoose.model("Articulo", ArticuloSchema);