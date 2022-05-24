const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TipoMovimientoSchema = new Schema({
  descripcion: {
    type: String
  }
});

module.exports = mongoose.model("TipoMovimiento", TipoMovimientoSchema);