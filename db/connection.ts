import { Sequelize } from "sequelize";

const db = new Sequelize('nodemysqlexample', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
})

export default db

