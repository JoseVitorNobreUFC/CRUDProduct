import { ProductModel } from "../postgres/postgres.js"

export const getAll = async (req, res) => {
    try {
        const product = await ProductModel.findAll({})
        if (product.length == 0) {
            return res.status(200).json({
                message: "Produto não encontrado"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "error": "Erro interno do servidor"
        })
    }
}

export const addProduct = async (req, res) => {
    const { name, description, price, isSellable } = req.body
    const missingFields = []

    if (name == null) missingFields.push("nome")
    if (description == null) missingFields.push("descrição")
    if (price == null) missingFields.push("preço")
    if (isSellable == null) missingFields.push("isSellable")

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Campos ausentes: [${missingFields.join(", ")}]`
        })
    }

    try {
        const product = await ProductModel.findOne({
            where: {
                name: name
            }
        })
        if (product == null) {
            await ProductModel.create(req.body)
            return res.status(201).json({ message: "Produto criado com sucesso" })
        }
        return res.status(400).json({ message: "Produto já existe" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "error": "Erro interno do servidor"
        })
    }
}

export const putProduct = async (req, res) => {
    const name = req.params.name  
    const updatedData = req.body 

    try {
        const [rowsUpdated] = await ProductModel.update(updatedData, { where: { name } })

        if (rowsUpdated === 0) {
            return res.status(404).json({ message: "Produto não encontrado" })
        }

        return res.status(200).json({
            message: "Produto editado com sucesso",
            updatedFields: updatedData,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: "Erro interno do servidor",
        })
    }
}


export const deleteProduct = async (req, res) => {
    const name = req.params.name

    try {
        const rowsDeleted = await ProductModel.destroy({ where: { name } })

        if (rowsDeleted === 0) {
            return res.status(404).json({ message: "Produto não encontrado" })
        }

        return res.status(200).json({ message: "Produto deletado com sucesso" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: "Erro interno do servidor"
        })
    }
}
