const { DataTypes } = require('sequelize');

module.exports = Sequelize => {
    Sequelize.define("Category", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey : true
        },

        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}