const mysql = require('mysql');

const connection = mysql.createConnection({
host: process.env.DATABASE_HOST,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_NAME
});

module.exports.connect = () => {
connection.connect((error) => {
    if (error) {
    console.error('Il y a une erreur de connexion : ' + error);
    } else {
    console.log('Connecté à la db réussite');
    }
});
};

module.exports.executeQuery = (query) => {
if (connection.state === 'disconnected') {
    // Ne pas oublier d'appeler la fonction connect avant de faire des requètes à la base de donnée
    throw new Error('There is no connection to the database, don\'t forget to call the \'connect\' method before executing queries!');
}
return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
    if (err) reject(err);
    resolve(results);
    });
})
};