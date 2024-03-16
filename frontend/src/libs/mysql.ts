import mysql from "serverless-mysql";


export const pool = mysql({
    config:{
        host: 'localhost',
        user: 'root',
        password: '0512',
        port: 3306,
        database: 'nextmysqlcrud'
    }
})