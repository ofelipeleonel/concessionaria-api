const express = require('express');
const router = express.Router();
const db = require('../db');

// Listar todos os veículos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM veiculo';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao buscar veículos', detalhe: err.message });
    }
    res.json(results);
  });
});

// Buscar veículo por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM veiculo WHERE id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao buscar veículo', detalhe: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ mensagem: 'Veículo não encontrado' });
    }
    res.json(results[0]);
  });
});

// Cadastrar novo veículo
router.post('/', (req, res) => {
  const { modelo, marca, preco } = req.body;

  if (!modelo || !marca || preco === undefined) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos: modelo, marca e preco' });
  }

  const sql = 'INSERT INTO veiculo (modelo, marca, preco) VALUES (?, ?, ?)';

  db.query(sql, [modelo, marca, preco], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao cadastrar veículo', detalhe: err.message });
    }
    res.status(201).json({
      mensagem: 'Veículo cadastrado com sucesso!',
      id: result.insertId,
      veiculo: { id: result.insertId, modelo, marca, preco }
    });
  });
});

// Atualizar veículo por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { modelo, marca, preco } = req.body;

  if (!modelo || !marca || preco === undefined) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos: modelo, marca e preco' });
  }

  const sql = 'UPDATE veiculo SET modelo = ?, marca = ?, preco = ? WHERE id = ?';

  db.query(sql, [modelo, marca, preco, id], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao atualizar veículo', detalhe: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Veículo não encontrado' });
    }
    res.json({
      mensagem: 'Veículo atualizado com sucesso!',
      veiculo: { id: Number(id), modelo, marca, preco }
    });
  });
});

// Deletar veículo por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM veiculo WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao excluir veículo', detalhe: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Veículo não encontrado' });
    }
    res.json({ mensagem: 'Veículo excluído com sucesso!' });
  });
});

module.exports = router;
