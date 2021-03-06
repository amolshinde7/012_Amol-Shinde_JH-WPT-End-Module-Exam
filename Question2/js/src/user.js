const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "mysql",
    database: "project1",
};

async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Success!!!");
    await connection.endAsync();
}

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Success!!!");
    let sql = `insert into message (message) values ( ?)`;
    await connection.queryAsync(sql, [message.messages]);
    await connection.endAsync();
    console.log("Record Added!!");
}

async function selectUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Success!!!");
    let sql = `select * from user`;
    const list = await connection.queryAsync(sql, []);

    await connection.endAsync();
    console.log(list);

    return list;
}
selectUser();

module.exports = { selectUser, addUser };




const user = { messages: "amol" };

addUser(user);