import { Sequelize } from 'sequelize';
import seed from './seed.js'

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  dialect: "postgres",
  logging: false
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync();
    await seed();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
  
export default sequelize;