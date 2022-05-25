const Adopcion = require("../models/adopcion.model");

exports.create = (req, res) => {
  const adopcionNueva = new Adopcion({
    fechaAdopcion: req.body.fechaAdopcion,
    status: req.body.status,
    Mascota: req.body.Mascota,
    Persona: req.body.Persona,
  });

  adopcionNueva.save((err, adopcionNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la nueva adopcion`,
      });
    } else {
      Adopcion.findById(adopcionNueva._id)
        .populate("Mascota")
        .populate("Persona")
        .exec((err, adopcionNueva) => {
          if (err) {
            console.log(err);
            res.status(500).send({
              message:
                err.message ||
                `Ocurrio un error al tratar de crear la nueva adopcion`,
            });
          } else {
            res.status(200).send(adopcionNueva);
          }
        });
    }
  });
};

exports.findOne = (req, res) => {
  Adopcion.findById(req.params.id)
    .populate("Mascota")
    .populate("Persona")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar la adopcion`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.findAll = (req, res) => {
  Adopcion.find()
    .populate("Mascota")
    .populate("Persona")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar la adopcion`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.update = (req, res) => {
  Adopcion.findByIdAndUpdate(req.params.id, req.body)
    .populate("Mascota")
    .populate("Persona")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de actualizar la adopcion`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.delete = (req, res) => {
  Adopcion.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Adopcion con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Adopcion eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Adopcion con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la adopcion con id: ${req.params.id}.`,
      });
    });
};

// adopcionNueva.save((err, adopcionNueva) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send({
//         message:
//           err.message ||
//           `Ocurrio un error al tratar de crear a ${personaNueva.nombres}`,
//       });
//     } else {
//       res.status(200).send(personaNueva);
//     }
//   });
