require('dotenv').config();

const http = require('http');
const port = 3000;
const serverID = process.env.SERVER_ID;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hola desde ${serverID}`);
});

server.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
