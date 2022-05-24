const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NoticiaSchema = new Schema({
  titulo: {
    type: String
  },
  subtitulo: {
    type: String
  },
  linksImagenes: [{
    type: String
  }],
  cuerpoNoticia: {
    type: String
  }
});

module.exports = mongoose.model("Noticia", NoticiaSchema);