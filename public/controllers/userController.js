const bcryptjs = require("bcryptjs");
const Usuario = require("../models/userModel");

const getUserByid = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findById({ _id: id });
    res.send({
      ok: 200,
      usuario,
    });
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

const getUsers = async (req, res) => {
  Usuarios = await Usuario.find();
  res.send({
    ok: 200,
    Usuarios,
  });
};
const postUser = async (req, res) => {
  const { name, lastname, identification, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const usuario = new Usuario({
    name,
    lastname,
    identification,
    password: hashedPassword,
  });
  await usuario.save();
  res.send({
    ok: 200,

    usuario,
  });
};
const putUser = async (req, res) => {
  const id = req.params.id;
  const { name, lastname, identification, password } = req.body;
  const usuario = await Usuario.findById({ _id: id });
  const hashedPassword = await bcryptjs.hash(password, 10);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  usuario.name = name;
  usuario.lastname = lastname;
  usuario.identification = identification;
  usuario.password = hashedPassword;
  await usuario.save();
  res.send({
    ok: 200,
    usuario,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  usuario = await Usuario.findByIdAndDelete({ _id: id });

  res.send({
    ok: 200,
    message: "usuario Eliminado con exito",
  });
};

module.exports = {
  getUserByid,
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
