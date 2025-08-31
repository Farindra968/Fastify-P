import { Sequelize } from "sequelize";
import { InitUser } from "../Model/User.Model.js";
import pg from "pg"

const sequelize = new Sequelize(
  "postgresql://neondb_owner:npg_ksDwVMgXdi89@ep-super-base-a16o1a8d-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
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
