import { DataTypes } from "sequelize"

export const createProductModel = (sequelize) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        isSellable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Product
}