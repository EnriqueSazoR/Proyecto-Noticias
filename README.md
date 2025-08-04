# Proyecto NoticiasApp

Esta aplicación web muestra noticias reales categorizadas en secciones como deportes, ciencia, tecnología, etc. 
El backend estará desarrollado en Node.js con Express, usando Prisma como ORM para manejar la base de datos MySQL.

El frontend usará EJS como motor de plantillas para facilitar el renderizado dinámico, apoyado con estilos Bootstrap 5 para un diseño limpio y responsivo.

Características principales implementadas en esta fase inicial:
- Servidor Express configurado con módulos ES y nodemon para desarrollo.
- Motor de vistas EJS integrado y primera vista básica creada.
- Configuración de Prisma ORM con modelos definidos para usuarios, categorías y noticias.
- Migraciones de base de datos aplicadas automáticamente para crear tablas necesarias.
- Cliente Prisma probado con consultas básicas a la base de datos.

En futuras iteraciones se agregarán funcionalidades como autenticación de usuarios, consumo de API externa para noticias reales y manejo de sesiones.
