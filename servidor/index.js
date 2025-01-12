import express from 'express'
import { connection } from './postgres/postgres.js'
import router from './view/routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 3333

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ', PORT)
})

connection()