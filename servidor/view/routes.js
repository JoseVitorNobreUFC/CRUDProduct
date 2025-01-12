import express from 'express'
import { getAll, addProduct, putProduct, deleteProduct, findProductByName } from '../controller/productController.js'

const router = express.Router()

router.get("/", getAll)
router.post("/", addProduct)
router.put("/:name", putProduct)
router.delete("/:name", deleteProduct)
router.get('/:name', findProductByName);

export default router