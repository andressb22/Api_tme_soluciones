const { Pool } = require('pg');


const pool = new Pool({
    connectionString: "postgres://default:B5G7DLvOpKuf@ep-summer-firefly-75818562-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require"
})

/*const pool = new Pool({
    user: 'postgres',
    password: '1015412015Af',
    host: 'localhost',
    port: 5432,
    database: 'tme_soluciones',
});*/

module.exports = {pool};