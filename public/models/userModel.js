const { Schema, model } = require("mongoose");
const bcryptjs = require("bcryptjs");
const modelUser = new Schema({
  name: {
    type: String,
    required: ["el nombre es obligatorio"],
  },
  NIT_: {
    type: String,
    unique: true,
    required: ["el nit de la empresa es obligatorio"],
  },
  email: {
    type: String,
    required: ["el correo es obligatorio"],
  },
  phone: {
    type: String,
    required: ["el telefono es obligatorio"],
  },
  password: {
    type: String,
    required: ["La contraseña es obligatoria"],
  },
  roles: [{ ref: "Role", type: Schema.Types.ObjectId }],
  status: {
    type: Boolean,
    default: true,
  },
});

modelUser.statics.encryptPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};
modelUser.statics.comparePaswword = async (password, receibedPassword) => {
  return await bcryptjs.compare(password, receibedPassword);
};
module.exports = model("Users", modelUser);
