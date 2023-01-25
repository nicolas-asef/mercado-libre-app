const { DataTypes } = require('sequelize');

module.exports = Sequelize => {
    Sequelize.define("Product", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey : true
        },

        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}