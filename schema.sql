CREATE DATABASE IF NOT EXISTS concessionaria_db;
USE concessionaria_db;

CREATE TABLE IF NOT EXISTS veiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- Dados iniciais para teste
INSERT INTO veiculo (modelo, marca, preco) VALUES
('Civic', 'Honda', 120000.00),
('Corolla', 'Toyota', 130000.00),
('Onix', 'Chevrolet', 75000.00);
