const Application = require("../models/applicationModel");

const getApplication = async (req, res) => {
  try {
    const id = req.params.id;
    const application = await Application.findOne({ _id: id });
    res.status(200).json({ application });
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    res.status(500).json({ error: "Error al obtener el servicio" });
  }
};
const getApplicationByDateAndUserId = async (req, res) => {
  try {
    const { date, userId } = req.query; // Obteniendo los parámetros de la solicitud GET

    // Modificar la lógica según tu esquema de base de datos
    // Por ejemplo, asumiendo que tienes un modelo llamado Application y campos date y userId
    const application = await Application.find({ date, userId });

    if (!application) {
      return res
        .status(404)
        .json({
          message:
            "No se encontró ninguna aplicación para la fecha y el ID de usuario proporcionados",
        });
    }

    res.status(200).json({ application });
  } catch (error) {
    console.error(
      "Error al obtener la aplicación por fecha y ID de usuario:",
      error
    );
    res
      .status(500)
      .json({
        error: "Error al obtener la aplicación por fecha y ID de usuario",
      });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json({ applications });
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    res.status(500).json({ error: "Error al obtener los servicios" });
  }
};
const postApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(200).json({ application: newApplication });
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    res.status(500).json({ error: "Error al crear el servicio" });
  }
};

const putApplication = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedApplication) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }
    res.status(200).json({ application: updatedApplication });
  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    res.status(500).json({ error: "Error al actualizar el servicio" });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedApplication = await Application.findByIdAndDelete(id);
    if (!deletedApplication) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }
    res.status(200).json({ message: "Agendamiento eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    res.status(500).json({ error: "Error al eliminar el servicio" });
  }
};

module.exports = {
  getApplicationByDateAndUserId,
  getApplication,
  getApplications,
  postApplication,
  putApplication,
  deleteApplication,
};
