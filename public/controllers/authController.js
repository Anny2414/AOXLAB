const User = require("../models/userModel");
const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");
const Role = require("../models/roleModel");
const login = async (req, res) => {
  try {
    const { identification, password } = req.body;
    const usuario = await User.findOne({ identification });
    if (!usuario) {
      return (
        res.status(404).json({ message: "Usuario no encontrado" }),
        console.log(usuario)
      );
    }

    const isPasswordValid = await User.comparePaswword(
      password,
      usuario.password
    );

    if (isPasswordValid) {
      const usuario = await User.findOne({ identification });
      const token = jwt.sign({ id: usuario._id }, process.env.SECRET, {
        expiresIn: 86400,
      });
      return res.status(200).json({ message: "Logueo exitoso", token });
    } else {
      res.status(400).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const register = async (req, res) => {
  const { name, nit, identification, email, phone, password, roles, status } =
    req.body;
  const usuario = await User.findOne({ identification });
  if (usuario) {
    return res.status(500).json({ message: "Este usuario ya está registrado" });
  } else if (!usuario) {
    const newuser = new User({
      name,
      nit,
      identification,
      email,
      phone,
      password: await User.encryptPassword(password),
      status,
    });

    if (nit && nit.length > 0) {
      const foundNit = await Company.find({ NIT: { $in: nit } });
      console.log(foundNit);
      if (foundNit.length > 0) {
        newuser.NIT_ = foundNit.map((company) => company._id);
      } else {
        return res.status(400).json({ message: "NIT no válido" });
      }
    } else {
      const defaultNIT = await Company.findOne({ NIT: "00000" }); // Reemplaza "NIT_predeterminado" por el NIT que deseas usar por defecto
      if (defaultNIT) {
        newuser.NIT_ = [defaultNIT._id];
      } else {
        return res
          .status(500)
          .json({ message: "NIT predeterminado no encontrado" });
      }
    }
    if (roles && roles.length > 0) {
      const foundRoles = await Role.find({ Nombre: { $in: roles } });
      if (foundRoles.length > 0) {
        newuser.roles = foundRoles.map((role) => role._id);
      } else {
        return res.status(400).json({ message: "Roles no válidos" });
      }
    } else {
      const defaultRole = await Role.findOne({ Nombre: "Clientes" });
      if (defaultRole) {
        newuser.roles = [defaultRole._id];
      } else {
        return res
          .status(500)
          .json({ message: "No se encontró un rol predeterminado" });
      }
    }

    console.log(newuser);
    const usersaved = await newuser.save();
    const token = jwt.sign({ id: usersaved._id }, process.env.SECRET, {
      expiresIn: 86400,
    });
    res.json({ message: "Registro exitoso", token });
  }
};
module.exports = {
  login,
  register,
};
