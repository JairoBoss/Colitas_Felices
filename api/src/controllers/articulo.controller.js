const Articulo = require("../models/articulo.model");

exports.create = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "El articulo debe de tener un nombre",
    });
  }

  const articuloNuevo = new Articulo({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    linksImagenes: req.body.linksImagenes,
    categoria: req.body.categoria,
  });

  articuloNuevo.save((err, articuloNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el articulo ${articuloNuevo.nombre}`,
      });
    } else {
      Articulo.findById(articuloNuevo._id)
        .populate("categoria")
        .exec((err, articuloNuevo) => {
          if (err) {
            console.log(err);
            res.status(500).send({
              message:
                err.message ||
                `Ocurrio un error al tratar de crear el nuevo articulo`,
            });
          } else {
            res.status(200).send(articuloNuevo);
          }
        });
    }
  });
};

exports.findOne = (req, res) => {
  Articulo.findById(req.params.id)
    .populate("categoria")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar el articulo`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.findAll = (req, res) => {
  Articulo.find()
    .populate("categoria")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message || `Ocurrio un error al tratar de todos los productos`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.update = (req, res) => {
  Articulo.findByIdAndUpdate(req.params.id, req.body)
    .populate("categoria")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar los articulos`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.delete = (req, res) => {
  Articulo.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Articulo con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Articulo eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Articulo con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el articulo con id: ${req.params.id}.`,
      });
    });
};
