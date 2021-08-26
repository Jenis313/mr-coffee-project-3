const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    database: 'mr_coffee_db',
    host: 'localhost',
    port: 5432
})

module.exports = pool;