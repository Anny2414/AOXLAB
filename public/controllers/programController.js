const program = require("../models/programModel");
const User = require ("../models/userModel")
const aplication = require("../models/applicationModel")
const getprograms = async (req, res) => {
  const programas = await program.find();
  try {
    res.send({
      ok: 200,
      programas,
    });
  } catch (error) {
    console.error("Error al obtener el agendamiento:", error);
    res.status(500).json({ error: "Error al obtener el agendamiento" });
  }
};

const getProgrambyid = async (req, res) => {
  try {
    const id = req.params.id;
    const programa = await program.find({ user: id });
    res.send({
      ok: 200,
      programa,
    });
  } catch (error) {
    console.error("Error al obtener el agendamiento:", error);
    res.status(500).json({ error: "Error al obtener el agendamiento" });
  }
};

const postProgram = async (req, res) => {
  const { title,start,status,user,Info } = req.body;

  const Program = new program({
    title,start,status,user
  });
  if (user && user.length > 0) {
    const founduser = await User.find({ _id: { $in: user } });
    console.log(founduser);
    if (founduser.length > 0) {
      Program.user = founduser.map((User) => User._id);
    } else {
      return res.status(400).json({ message: "usuario no encontrado" });
    }
  }
  if (aplication && aplication.length > 0) {
    const foundaplication = await aplication.find({ _id: { $in: aplication } });
    console.log(foundaplication);
    if (foundaplication.length > 0) {
      Program.Info = foundaplication.map((aplication) => aplication._id);
    } else {
      return res.status(400).json({ message: "servicio no encontrado" });
    }
  }
  await Program.save();
  res.send({
    ok: 200,
    Program,
  });
};
module.exports = {
  getProgrambyid,
  getprograms,
  postProgram,
};
