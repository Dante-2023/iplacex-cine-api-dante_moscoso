import Pelicula from './pelicula.js';


// Agregar una película
export const handleInsertPeliculaRequest = async (req, res) => {
  try {
    const { nombre, generos, anioEstreno } = req.body;

    const newPelicula = new Pelicula({
      nombre,
      generos,
      anioEstreno
    });

    await newPelicula.save();
    return res.status(201).json(newPelicula);
  } catch (error) {
    console.error('Error al agregar película:', error);
    return res.status(500).json({ error: 'Error al agregar película' });
  }
};

// Obtener todas las películas
export const handleGetPeliculasRequest = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    return res.status(200).json(peliculas);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    return res.status(500).json({ error: 'Error al obtener películas' });
  }
};

// Obtener película por _id
export const handleGetPeliculaByIdRequest = async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    return res.status(200).json(pelicula);
  } catch (error) {
    console.error('Error al obtener película por ID:', error);
    return res.status(500).json({ error: 'Error al obtener película' });
  }
};

// Actualizar película por _id
export const handleUpdatePeliculaByIdRequest = async (req, res) => {
  try {
    const updates = req.body;

    const pelicula = await Pelicula.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true } // Retorna la película actualizada
    );

    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }

    return res.status(200).json(pelicula);
  } catch (error) {
    console.error('Error al actualizar película:', error);
    return res.status(500).json({ error: 'Error al actualizar película' });
  }
};

// Eliminar película por _id
export const handleDeletePeliculaByIdRequest = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndDelete(req.params.id);

    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }

    return res.status(200).json({ message: 'Película eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar película:', error);
    return res.status(500).json({ error: 'Error al eliminar película' });
  }
};


