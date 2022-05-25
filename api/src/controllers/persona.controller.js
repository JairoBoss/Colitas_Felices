const Persona = require("../models/persona.model");

exports.create = (req, res) => {
  if (!req.body.nombres) {
    res.status(400).send({
      message: "El usuario debe de tener un nombre",
    });
  }

  const personaNueva = new Persona({
    nombres: req.body.nombres,
    apellidoPaterno: req.body.apellidoPaterno,
    apellidoMaterno: req.body.apellidoMaterno,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
  });

  personaNueva.save((err, personaNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear a ${personaNueva.nombres}`,
      });
    } else {
      res.status(200).send(personaNueva);
    }
  });
};

exports.findOne = (req, res) => {
  Persona.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la persona con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Persona.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todas las personas registrados.",
      });
    });
};

exports.update = (req, res) => {
  Persona.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la persona con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Persona.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Persona eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la persona con id: ${req.params.id}.`,
      });
    });
};
