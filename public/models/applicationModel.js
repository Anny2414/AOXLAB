
const { Schema, model } = require("mongoose");
const modelApplication = new Schema({
  Muestreo: {
    Ambiente: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    Manipuladores: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    Superficies: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    Microbiologico: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    Fisicoquimico: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  observaciones: {
    type: String,
    default: '',
  },
});

module.exports = model("Servicios", modelApplication);
