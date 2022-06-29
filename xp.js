const mysql = require('./MysqlConnector');

module.exports = async (message) => {
    //generation de l'xp

    function generateXp() {
        let min = 1
        let max = 1
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };       // si c'est le bot qui envoie le message

    if(message.author.bot) return;
    //si c'est pas un message privée
    if(message.channel.type === "dm") return;

    const result = await mysql.executeQuery(`SELECT * FROM xp WHERE user_id = '${message.author.id}'`);
    
    let sql = '';

    

    if(result.length < 1) {
        sql = `INSERT INTO xp (user_id, xp_count) VALUES ('${message.author.id}', ${generateXp()})`
    } else {
        let xp_count = result[0].xp_count;
        sql = `UPDATE xp SET xp_count = ${xp_count +generateXp()} WHERE user_id = '${message.author.id}'`;
    }

    await mysql.executeQuery(sql);
}
