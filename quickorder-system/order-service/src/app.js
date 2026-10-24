const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password123',
  database: process.env.DB_NAME || 'quickorder_db',
  port: 5432,
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'Order Service' });
});

app.post('/api/orders', async (req, res) => {
  const { clienteId, items, total } = req.body;
  try {
    const query = `
      INSERT INTO pedidos (cliente_id, total, estado, fecha) 
      VALUES ($1, $2, 'Recibido', NOW()) 
      RETURNING id_pedido, estado, fecha;
    `;
    const values = [clienteId, total];
    const result = await pool.query(query, values);

    res.status(201).json({
      mensaje: "Pedido registrado y enviado a cocina exitosamente",
      orden: result.rows[0]
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno al procesar la orden" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Order Service corriendo en el puerto ${PORT}`);
});