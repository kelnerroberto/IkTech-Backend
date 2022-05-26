require('dotenv/config');
const port = process.env.DB_PORT;
const app = require('./app');

app.listen(port);
console.log(`API rodando na porta: ${port}`);