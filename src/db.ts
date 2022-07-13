import { createPool } from 'promise-mysql2'
import * as dotenv from 'dotenv'
dotenv.config();
// export const connection = mysql.createConnection({
//     host : process.env.DB_HOST,
//     user : process.env.DB_USERNAME,
//     password : process.env.DB_PASSWORD,
//     database : process.env.DB_NAME
// })
export async function getConnection() {
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit : 10
    })
    return connection;
}