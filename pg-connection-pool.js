var pg = require("pg");

var pool = new pg.Pool({
     user: "postgres",
    password: "Rondo1",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false
});

module.exports = pool;
