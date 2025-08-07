// Archivo para crear las rutas de autenticación
import { Router } from "express";
import { registrarUsuario, iniciarSesion } from "../controllers/authController.js";


const router = Router();

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', registrarUsuario)

router.post('/login', iniciarSesion)

// Exportar
export default router