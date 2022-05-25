const Noticia = require("../models/noticia.model");

exports.create = (req, res) => {
  if (!req.body.titulo) {
    res.status(400).send({
      message: "La noticia debe de tener un titulo",
    });
  }

  const noticiaNueva = new Noticia({
    titulo: req.body.titulo,
    subtitulo: req.body.subtitulo,
    linksImagenes: req.body.linksImagenes,
    cuerpoNoticia: req.body.cuerpoNoticia,
  });

  noticiaNueva.save((err, noticiaNueva) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la noticia ${noticiaNueva.titulo}`,
      });
    } else {
      res.status(200).send(noticiaNueva);
    }
  });
};

exports.findOne = (req, res) => {
  Noticia.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Noticia con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Noticia con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la noticia con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Noticia.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todas las noticias registrados.",
      });
    });
};

exports.update = (req, res) => {
  Noticia.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Noticia con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Noticia con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la noticia con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Noticia.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Noticia con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Noticia eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Noticia con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la noticia con id: ${req.params.id}.`,
      });
    });
};
