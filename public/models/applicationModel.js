
const { Schema, model } = require("mongoose");
const modelApplication = new Schema({
  Muestreo: {
    ambiente: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    manipuladores: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    superficies: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    microbiologico: {
      selected: {
        type: Boolean,
        default: false,
      },
      cantidad: {
        type: String,
        default: '',
      },
    },
    fisicoquimico: {
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
