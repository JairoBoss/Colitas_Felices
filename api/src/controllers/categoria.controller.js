const Categoria = require("../models/categoria.model");

exports.create = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "La categoria debe de tener un nombre",
    });
  }

  const categoriaNueva = new Categoria({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
  });

  categoriaNueva.save((err, categoriaNueva) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la categoria ${categoriaNueva.nombre}`,
      });
    } else {
      res.status(200).send(categoriaNueva);
    }
  });
};

exports.findOne = (req, res) => {
  Categoria.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la categoria con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Categoria.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todas las categorias registrados.",
      });
    });
};

exports.update = (req, res) => {
  Categoria.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la categoria con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Categoria.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Categoria eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la categoria con id: ${req.params.id}.`,
      });
    });
};
