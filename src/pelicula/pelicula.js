import mongoose from 'mongoose'

const Schema = mongoose.Schema;

// Definición del esquema de Pelicula
const peliculaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  generos: {
    type: [String], // Array de géneros (e.g., ["Drama", "Acción"])
    required: true
  },
  anioEstreno: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Creación del modelo Pelicula
const Pelicula = mongoose.model('Pelicula', peliculaSchema);

export default Pelicula;