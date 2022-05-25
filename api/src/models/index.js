const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.app = require("./adopcion.model.js")(mongoose);
db.app = require("./articulo.model.js")(mongoose);
db.app = require("./categoria.model.js")(mongoose);
db.app = require("./institucion.model.js")(mongoose);
db.app = require("./mascota.model.js")(mongoose);
db.app = require("./movimiento.model.js")(mongoose);
db.app = require("./noticia.model.js")(mongoose);
db.app = require("./pago.model.js")(mongoose);
db.app = require("./persona.model.js")(mongoose);
db.app = require("./tipoMovimiento.model.js")(mongoose);
db.app = require("./usuario.model.js")(mongoose);
db.app = require("./venta.model.js")(mongoose);

module.exports = db;