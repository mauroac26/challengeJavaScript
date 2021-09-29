const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });    


// exports.sequelize = sequelize;
// module.exports = sequelize;
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;