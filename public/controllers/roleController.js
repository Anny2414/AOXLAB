const role = require("../models/roleModel");

const getRole = async (req, res) => {
  const roles = await role.find();
  try {
    res.send({
      ok: 200,
      roles,
    });
  } catch (error) {
    console.error("Error al obtener el rol:", error);
    res.status(500).json({ error: "Error al obtener el rol" });
  }
};

const getRolebyid = async (req, res) => {
  try {
    const id = req.params.id;
    const Role = await role.findById({ _id: id });
    res.send({
      ok: 200,
      Role,
    });
  } catch (error) {
    console.error("Error al obtener el rol:", error);
    res.status(500).json({ error: "Error al obtener el rol" });
  }
};

const postRole = async (req, res) => {
  const { Nombre } = req.body;
  const Role = new role({
    Nombre,
  });
  await Role.save();
  res.send({
    ok: 200,
    Role,
  });
};

module.exports = {
  getRole,
  getRolebyid,
  postRole,
};
