const Usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.create = async (req, res) => {
  if (!req.body.correo || !req.body.contraseña) {
    res.status(400).send({
      message: "El usuario debe de tener un correo y contraseña",
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(req.body.contraseña, salt);

  const usuarioNuevo = new Usuario({
    correo: req.body.correo,
    contraseña: hasPassword,
    Persona: req.body.Persona,
  });

  usuarioNuevo.save((err, usuarioNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el usuario con correo ${usuarioNuevo.correo}`,
      });
    } else {
      let payload = {
        id: usuarioNuevo._id,
        correo: req.body.correo || 0,
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);

      res.status(200).send({ usuarioNuevo, token });
    }
  });
};

exports.login = async (req, res) => {
  Usuario.findOne({ correo: req.body.correo })
    .populate("Persona")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Ocurrio un erro al tratar de recuperar los datos.",
        });
      } else {
        if (user) {
          const validPass = bcrypt
            .compare(req.body.contraseña, user.contraseña)
            .then((data) => {
              if (!data) {
                return res.status(401).send("Correo o contraseña incorrectas");
              } else {
                let payload = { id: user._id, user_type_id: user.user_type_id };
                const token = jwt.sign(payload, process.env.TOKEN_SECRET);

                res
                  .status(200)
                  .header("auth-token", token)
                  .send({ user, token });
              }
            });
        } else {
          res.status(401).send("Acceso denegado");
        }
      }
    });
};

exports.findOne = (req, res) => {
  Usuario.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del usuario con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Usuario.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar los usuarios registrados.",
      });
    });
};

exports.update = (req, res) => {
  Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el usuario con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Usuario.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send({ message: "Usuario eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al usuario con id: ${req.params.id}.`,
      });
    });
};
