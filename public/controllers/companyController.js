const Company = require("../models/companyModel");

const getCompany = async (req, res) => {
  try {
    const nit = req.params.nit;
    const company = await Company.findOne({ NIT: nit });
    res.send({
      ok: 200,
      company,
    });
  } catch (error) {
    console.error("Error al obtener la compañia:", error);
    res.status(500).json({ error: "Error" });
  }
};

const getCompanys = async (req, res) => {
  companys = await Company.find();
  res.send({
    ok: 200,
    companys,
  });
};
const postCompany = async (req, res) => {
  const { NIT, name } = req.body;
  const company = new Company({
    NIT,
    name,
  });
  await company.save();
  res.send({
    ok: 200,

    company,
  });
};
const putCompany = async (req, res) => {
  const id = req.params.id;
  const { NIT, name } = req.body;
  const company = await Company.findById({ _id: id });
  if (!company) {
    return res.status(404).json({ error: "Compañia no encontrada" });
  }
  company.name = name;
  company.NIT = NIT;
  await company.save();
  res.send({
    ok: 200,
    company,
  });
};

const deleteCompany = async (req, res) => {
  const id = req.params.id;
  company = Company.findByIdAndDelete({ _id: id });

  res.send({
    ok: 200,
    message: "Compañia Eliminada con exito",
  });
};

module.exports = {
  getCompany,
  getCompanys,
  postCompany,
  putCompany,
  deleteCompany,
};
