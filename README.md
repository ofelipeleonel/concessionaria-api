# API REST - Concessionária (Prova P2)

Projeto desenvolvido para a Prova P2 da disciplina Tecnologia de Construção de Software I.

A API implementa o CRUD completo para o recurso **veiculo** (`id`, `modelo`, `marca`, `preco`).

## Tecnologias
- Node.js
- Express
- MySQL / MariaDB (módulo `mysql2`)
- nodemon, morgan, body-parser, cors

## Estrutura de Pastas
- `server.js`: Inicialização do servidor
- `app.js`: Configuração do Express e middlewares
- `db.js`: Conexão com o banco de dados MySQL
- `routes/veiculoRoutes.js`: Rotas do CRUD de veículos
- `schema.sql`: Script de criação do banco e tabela
- `Concessionaria_API.postman_collection.json`: Coleção de requisições para o Postman

## Como rodar o projeto

1. Execute o script `schema.sql` no MySQL Workbench para criar a base e a tabela.
2. Se necessário, ajuste a senha do banco no arquivo `.env`.
3. Instale os pacotes:
```bash
npm install
```
4. Inicie o servidor:
```bash
npm start
```
*(Para rodar com nodemon durante o desenvolvimento: `npm run dev`)*

## Endpoints da API

- `GET /veiculo` - Lista todos os veículos
- `GET /veiculo/:id` - Busca veículo pelo ID
- `POST /veiculo` - Cadastra um novo veículo (espera JSON com `modelo`, `marca`, `preco`)
- `PUT /veiculo/:id` - Atualiza um veículo existente
- `DELETE /veiculo/:id` - Remove um veículo pelo ID
