import express from "express"
import productRoute from './routes/productRoute.js'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT;

app.use(cors({ origin: '*' }));

app.use("/search", productRoute)

app.get("/", (req, res) => {
    res.status(200).send("Backend")
})

app.listen(PORT, () => console.log(`Backend Runs on port ${PORT}`))

