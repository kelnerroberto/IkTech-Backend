require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'electronic_agenda',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'electronic_agenda',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql'
  },
};
