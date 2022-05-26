const port = process.env.DB_PORT || 3000;
const app = require('./app');

app.listen(port);
console.log(`API rodando na porta: ${port}`);