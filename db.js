const { Pool } = require('pg');


const pool = new Pool({
    POSTGRES_URL:"postgres://default:B5G7DLvOpKuf@ep-summer-firefly-75818562-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb",
    POSTGRES_PRISMA_URL:"postgres://default:B5G7DLvOpKuf@ep-summer-firefly-75818562-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15",
    POSTGRES_URL_NON_POOLING:"postgres://default:B5G7DLvOpKuf@ep-summer-firefly-75818562.us-east-1.postgres.vercel-storage.com:5432/verceldb",
    POSTGRES_USER:"default",
    POSTGRES_HOST:"ep-summer-firefly-75818562-pooler.us-east-1.postgres.vercel-storage.com",
    POSTGRES_PASSWORD:"B5G7DLvOpKuf",
    POSTGRES_DATABASE:"verceldb",
})

/*const pool = new Pool({
    user: 'postgres',
    password: '1015412015Af',
    host: 'localhost',
    port: 5432,
    database: 'tme_soluciones',
});*/

module.exports = {pool};