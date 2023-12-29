const program = require("../models/programModel");
const User = require ("../models/userModel")
const getprograms = async (req, res) => {
  const programas = await program.find().populate('Info').exec();
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

const getProgrambyiduser = async (req, res) => {
  try {
    const userId = req.params.id; // Suponiendo que aquí estás buscando por ID de usuario
    const programas = await program.find({ user: userId }).populate('Info').exec();
    res.status(200).json({ ok: true, programas });
  } catch (error) {
    console.error("Error al obtener programas por ID de usuario:", error);
    res.status(500).json({ error: "Error al obtener programas por ID de usuario" });
  }
};

const getProgrambyid = async (req, res) => {
  try {
    const id = req.params.id; // ID del programa
    const programa = await program.findById({_id : id}).populate('Info').exec();
    res.status(200).json({ ok: true, programa });
  } catch (error) {
    console.error("Error al obtener programa por ID:", error);
    res.status(500).json({ error: "Error al obtener programa por ID" });
  }
};

const postProgram = async (req, res) => {
  const { title,start,status,user,Info } = req.body;

  const Program = new program({
    title,start,status,user,Info
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
  if (user && user.length > 0) {
    const founduser = await User.find({ _id: { $in: user } });
    console.log(founduser);
    if (founduser.length > 0) {
      Program.user = founduser.map((User) => User._id);
    } else {
      return res.status(400).json({ message: "usuario no encontrado" });
    }
  }
  await Program.save();
  res.send({
    ok: 200,
    Program,
  });
};
const deleteProgram = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProgram = await Application.findByIdAndDelete(id);
    if (!deleteProgram) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }
    res.status(200).json({ message: "Agendamiento eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    res.status(500).json({ error: "Error al eliminar el servicio" });
  }
};


module.exports = {
  getProgrambyid,
  getProgrambyiduser,
  getprograms,
  postProgram,
  deleteProgram
};
