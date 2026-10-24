CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido SERIAL PRIMARY KEY,
    cliente_id VARCHAR(50) NOT NULL,
    total NUMERIC(10, 2) NOT NULL,
    estado VARCHAR(30) NOT NULL,
    fecha TIMESTAMP NOT NULL
);