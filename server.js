import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
const port = 3000;


app.use(cors());


app.use(express.json());

const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "likeme",
  password: "XXXX", 
  port: 5432,
});


app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los posts");
  }
});


app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  try {
    const query = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *";
    const values = [titulo, img, descripcion];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar el post");
  }
});

app.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).send("Post no encontrado");
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar los likes del post");
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).send("Post no encontrado");
    }

    res.json({ message: "Post eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el post");
  }
});




app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
