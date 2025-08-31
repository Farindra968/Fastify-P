import { DataTypes, Model } from "sequelize";


class User extends Model{}

export const InitUser = (sequelize)=>{
    User.init({
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
    },{
        sequelize,
        tableName:"users",
        modelName:"User",
        timestamps:true
    })
}
export default User