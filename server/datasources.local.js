/**
 * Created by danieldihardja on 27/12/16.
 */
module.exports = {

    mysqlDs : {
        "host": process.env.MYSQL_HOST 			|| '192.168.33.10',
        "port": process.env.MYSQL_PORT 			|| 3306,
        "database": process.env.MYSQL_DB 		|| "boilerplate",
        "username": process.env.MYSQL_USER 		|| "dev",
        "password": process.env.MYSQL_PASSWORD 	|| "dev123",
        "name": "mysqlDs",
        "connector": "mysql"
    }
};