const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PagoSchema = new Schema({
  idPaypal: {
    type: String
  },
  pagado: {
    type: Boolean
  }
});

module.exports = mongoose.model("Pago", PagoSchema);