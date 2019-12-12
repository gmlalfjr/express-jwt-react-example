'use strict';
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        item: DataTypes.STRING
    }, {});
    Item.associate = function (models) {
        // associations can be defined here
        Item.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        })
    };
    // Item.sync();
    return Item;
};
