const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const veiculoRoutes = require('./routes/veiculoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas da API
app.use('/veiculo', veiculoRoutes);

app.get('/', (req, res) => {
  res.send('API Concessionária em funcionamento');
});

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ mensagem: 'Rota não encontrada' });
});

module.exports = app;
