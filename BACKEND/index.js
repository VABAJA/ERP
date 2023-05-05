const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

const credentials = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'Repura_Testing'
}

app.get('/', (req, res) => {
    res.send('Hola desde la ruta raiz')
})

app.get('/usuarios', (req, res) => {
    let connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM users', (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
    connection.end()
})

app.listen(4000, () => console.log('Hola desde el servidor'))