var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VentaSchema = new Schema({
  articulos: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Articulo'
  }],
  movimiento: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Movimiento'
  }
});

module.exports = mongoose.model("Venta", VentaSchema);