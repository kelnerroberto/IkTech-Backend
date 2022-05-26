const port = process.env.PORT;
const app = require('./app');

app.listen(port);
console.log(`API rodando na porta: ${port}`);