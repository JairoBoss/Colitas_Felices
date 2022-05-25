const Institucion = require("../models/institucion.model");

exports.create = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "La institucion debe de tener un nombre",
    });
  }

  const institucionNueva = new Institucion({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    rfc: req.body.rfc,
    descripcion: req.body.descripcion,
    linksImagenes: req.body.linksImagenes,
  });

  institucionNueva.save((err, institucionNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la institucion ${institucionNueva.nombre}`,
      });
    } else {
      res.status(200).send(institucionNueva);
    }
  });
};

exports.findOne = (req, res) => {
  Institucion.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Institucion con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Institucion con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la institucion con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Institucion.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todas las Institucion registradas.",
      });
    });
};

exports.update = (req, res) => {
  Institucion.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Institucion con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Institucion con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la institucion con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Institucion.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Institucion con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Institucion eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Institucion con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la institucion con id: ${req.params.id}.`,
      });
    });
};
