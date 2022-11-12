const mysql = require('mysql');

const db = mysql.createConnection({
    user: "admin",
    host: "database-1.cu11gcggg3b7.us-east-1.rds.amazonaws.com",
    port: 3306,
    password: "admin123456",
    database: "kuppi"
});

module.exports = db;