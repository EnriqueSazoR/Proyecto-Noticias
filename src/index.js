import express from 'express'
import path from 'path' // se usa para trabajar con rutas de archivos y directorios de forma segura
import { fileURLToPath } from 'url' // importa una función para convertir URLs de tipo file:// a rutas normales de archivo
import authRoutes from '../src/routes/authRoutes.js'


const filName = fileURLToPath(import.meta.url) // convierte ruta actual a ruta de archivo estándar
const dirName = path.dirname(filName) // extrae el directorio actual del archivo a partir de filName

const app = express()
const port = process.env.PORT || 3000

// configurar EJS
app.set('view engine', 'ejs') // Express debe usar EJS como motor de vistas
app.set('views', path.join(dirName, 'views')) // En qué carpeta se encuentran las vistas

// middleware que permite a Express leer datos de formularios enviados por POST
app.use(express.urlencoded({extended: true}))

// Rutas
app.use('/', authRoutes)
app.listen(port, () => console.log(`Servidor ejecutandose en http://localhost:${port}`))
