/*
 * Copyright 2025 Dante Moscoso
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import express from 'express'
import peliRoute from './src/pelicula/routes.js'

import client from './src/common/db.js'


const app = express()
const port = 3000

// Middleware para parsear JSON
app.use(express.json())
app.use('/api', peliRoute)


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenidos al API REST de Dante Moscoso!')
});

const PORTS = 3000

// Levanta el servidor

await client.connect()
.then(() => {
    console.log('conectado al cluster')
    app.listen(PORTS,() => {console.log(`servidor corriendo en http://localhost:${PORTS}`)})

})
.catch((error) =>{
    console.log('error de coneccion al cluster', error)
})

