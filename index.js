const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/saveInfoClient", (req, res) => {
  const { nombre, correo, telefono, tipoTrasporte, tipoCarga, observaciones } =
    req.body;

  const saveInfoClient = async () => {
    try {
      const { pool } = require("./db");

      await pool.query(
        `INSERT INTO datos_cliente(nombre,correo,telefono,tipoTrasporte,tipoCarga,observaciones)
        VALUES($1,$2,$3,$4,$5,$6)`,
        [nombre, correo, telefono, tipoTrasporte, tipoCarga, observaciones]
      );

      res.status(200).json({ data: "guardado correctamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };

  saveInfoClient();
});

app.listen(PORT, () => {
  console.log("puerto escuchando en puerto 5000");
});
