const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "bitmyalrrkw4j05ao6c1-mysql.services.clever-cloud.com", 
    user: "us8c55njxar3ezcx", 
    password: "XlssJghojWAVQxru8ZiG",
    database:"bitmyalrrkw4j05ao6c1",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()