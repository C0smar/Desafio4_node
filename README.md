# Desafío - Like Me (Parte II)

Este proyecto es una continuación del desarrollo de la red social "Like Me", donde se implementan funcionalidades adicionales como la interacción de likes y la eliminación de posts. El proyecto consiste en una API REST desarrollada con Express.js y una interfaz de usuario construida con React.

## Requisitos Previos

- Node.js y npm instalados en tu máquina.
- PostgreSQL instalado y corriendo.

## Instalación

1. **Clona el repositorio:**

   git clone https://github.com/tu-usuario/Desafio-Like-Me-Parte-II.git
   cd Desafio-Like-Me-Parte-II
   
Instala las dependencias:

npm install

Configura la base de datos:

Crea una base de datos en PostgreSQL llamada likeme.

Crea una tabla posts con la siguiente estructura:

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    likes INT DEFAULT 0
);

Configura las variables de conexión a la base de datos:

Abre el archivo server.js y modifica las siguientes líneas con tus credenciales de PostgreSQL:

const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "likeme",
  password: "tu-contraseña", 
  port: 5432,
});

Ejecución
Inicia el servidor:


npm start

El servidor estará disponible en http://localhost:3000.

Inicia la aplicación React:

Abre una nueva terminal y navega a la carpeta del proyecto.

Ejecuta el siguiente comando:

npm run dev

La aplicación estará disponible en http://localhost:5173 (o el puerto que se indique).

Uso

Agregar un nuevo post: Completa el formulario en la interfaz de usuario y haz clic en "Agregar".

Dar like a un post: Haz clic en el botón de "Like" en cualquier post.

Eliminar un post: Haz clic en el botón de "Eliminar" en cualquier post.
