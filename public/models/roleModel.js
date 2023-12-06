const { Schema, model } = require("mongoose");

const rolesmodel = new Schema({
  Nombre: {
    type: String,
    required: ["el nombre de la empresa es obligatorio"],
  },
});

module.exports = model("Role", rolesmodel);
