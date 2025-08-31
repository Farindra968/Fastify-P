import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgresql://postgres.xxxxxxx:[yourpassword]@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true',{
    dialect: "postgres"
})



sequelize.authenticate().then(()=>{
    console.log("DB Connectd Successfully")
})

export default sequelize