import pg from 'pg'
const { Pool } = pg

const config = {
   user: process.env.DB_USER, 
   host: process.env.DB_HOST, 
   database: process.env.DB_NAME, 
   password: process.env.DB_PASS, 
   port: process.env.DB_PORT, 
}

const pool = new Pool(config)

export const query = (text, params, callback) => {
   return pool.query(text, params, callback)
}