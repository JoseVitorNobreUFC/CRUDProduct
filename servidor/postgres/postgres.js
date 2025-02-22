import { Sequelize } from "sequelize"
import { createProductModel } from "../model/productSchema.js"


const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

let ProductModel = null

const connection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão feita com sucesso')
        ProductModel = await createProductModel(sequelize)
        await sequelize.sync()
        console.log('Base de dados criada')
    } catch (error) {
        console.error('Não foi possivel conectar com a base de dados', error)
        
    }
}

export {
    connection,
    ProductModel
}