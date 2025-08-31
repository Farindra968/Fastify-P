import { Sequelize } from "sequelize";
import { InitUser } from "../Model/User.Model.js";
import pg from "pg"

const sequelize = new Sequelize(
  "postgresql://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxe",
  {
    dialect: "postgres",
    dialectModule:pg
  }
);

InitUser(sequelize);

sequelize.sync({ alter: true }).then(() => {
  console.log(`DB sync successfully`);
});


sequelize.authenticate().then(() => {
  console.log("DB Connectd Successfully");
});

export default sequelize;
