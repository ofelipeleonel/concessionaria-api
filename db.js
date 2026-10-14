const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'concessionaria_db',
  port: process.env.DB_PORT || 3306
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err.message);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
    connection.release();
  }
});

module.exports = db;
