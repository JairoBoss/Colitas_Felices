var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VentaSchema = new Schema({
  Articulos: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Articulos'
  }],
  Movimientos: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Movimientos'
  }
});

module.exports = mongoose.model("Venta", VentaSchema);