const Mascota = require("../models/mascota.model");

exports.create = async (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "La mascota debe de tener un nombre",
    });
    return;
  }

  const mascotaNueva = new Mascota({
    nombre: req.body.nombre,
    raza: req.body.raza,
    tamaño: req.body.tamaño,
    sexo: req.body.sexo,
    descripcion: req.body.descripcion,
    linksImagenes: req.body.linksImagenes,
    fechaNacimiento: req.body.fechaNacimiento,
  });

  mascotaNueva.save((err, mascotaNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear a la mascota ${mascotaNueva.nombre}`,
      });
    } else {
      res.status(200).send({ mascotaNueva });
    }
  });
};

exports.findOne = (req, res) => {
  Mascota.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Mascota con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Mascota con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la mascota con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Mascota.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todas las mascota registrados.",
      });
    });
};

exports.update = (req, res) => {
  Mascota.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Mascota con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Mascota con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la mascota con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Mascota.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Mascota con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Mascota eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Mascota con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar a la mascota con id: ${req.params.id}.`,
      });
    });
};
