import express, { NextFunction, Request, Response } from 'express'
import routes from './router/route'

const app = express()
app.use(express.json())

app.use("/produto", routes)

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('Rota não encontrada!');
};



app.get("/", notFoundMiddleware, (request: Request, response: Response) => {
    return response.json("apredendo api um typescript")
})



app.listen(3333)


