import { Router } from 'express';
import { handleInsertPeliculaRequest
    , handleGetPeliculasRequest
    , handleGetPeliculaByIdRequest
    , handleUpdatePeliculaByIdRequest
    , handleDeletePeliculaByIdRequest } from '../pelicula/controller.js';

const router = Router();


// Rutas para películas
router.post('/pelicula', handleInsertPeliculaRequest); // Insertar película
router.get('/peliculas', handleGetPeliculasRequest); // Obtener todas las películas
router.get('/pelicula/:id', handleGetPeliculaByIdRequest); // Obtener película por _id
router.put('/pelicula/:id', handleUpdatePeliculaByIdRequest); // Actualizar película por _id
router.delete('/pelicula/:id', handleDeletePeliculaByIdRequest); // Eliminar película por _id

export default router;