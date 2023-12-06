const { Schema, model } = require("mongoose");

const modelCompany = new Schema({
  NIT: {
    type: String,
    required: ["el NIT de la empresa es obligatorio"],
  },
  name: {
    type: String,
    required: ["El nombre de la empresa es obligatorio"],
  },
});

module.exports = model("Company", modelCompany);
