// Controlador para autenticarse (registro, inicar sesión)
import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";

const prisma = new PrismaClient();

// Método para registrar un nuevo usuario
export const registrarUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    if (!nombre || !email || !password) {
      return res.status(400).send("Todos los campos son obligatorios");
    }

    // Verificar si el usuario existe
    const usuarioExistente = await prisma.User.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(400).send("Este correo ya esta asociado a una cuenta");
    }

    // Encriptar contraseña
    const hashPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    await prisma.User.create({
      data: {
        nombre,
        email,
        password: hashPassword,
      },
    });

    res.send("Registro exitoso");
  } catch (error) {
    console.log("Error al registrar usuario", error);
    res.status(500).send("Error del servidor");
  }
};

// Método para login
export const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuarioLogin = await prisma.User.findUnique({
      where: { email },
    });

    if (!usuarioLogin) {
      return res.status(400).render("login", {
        error: "Credenciales Inválidas",
      });
    }

    // Verificar la contraseña
    const validarPassword = await bcrypt.compare(
      password,
      usuarioLogin.password
    );
    if (!validarPassword) {
      return res.status(400).render("login", {
        error: "Credenciales Inválidas",
      });
    }

    res.send("Inicio de sesión exitoso");
  } catch (error) {
    console.error("Error en el login", error);
    res.status(500).send("Error en el servidor");
  }
};
