const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: "admin",
    host: process.env.DB_HOST,
    port: "5432",
    database: process.env.DB_DATABASE
})

module.exports = pool;
