import { Router, Request, Response } from "express";

const routes = Router();

const products: any[] = [];

routes.get("/produtos", (request: Request, response: Response) => {
    return response.status(200).json(products);
});

routes.post("/produtos", (request: Request, response: Response) => {
    products.push(request.body);
    return response.json("Cadastrado com sucesso.");
});

routes.get("/produtos/:id", (request: Request, response: Response) => {
    const productId = Number(request.params.id);
    const product = products.find((item) => item.id === productId);

    if (product) {
        return response.status(200).json(product);
    } else {
        return response.status(404).json({ error: "Produto não encontrado." });
    }
});

routes.put("/produtos/:id", (request: Request, response: Response) => {
    const productId = Number(request.params.id);
    const { name, price, quantidade } = request.body;

    const productIndex = products.findIndex((item) => item.id === productId);

    if (!productIndex) {
        products[productIndex].name = name;
        products[productIndex].price = price;
        products[productIndex].quantidade = quantidade;

        return response.status(200).json(products[productIndex]);
    } else {
        return response.status(404).json({ error: "Produto não encontrado." });
    }
});


routes.delete("/produtos/:id", (request: Request, response: Response) => {
    const productId = Number(request.params.id);


    const productIndex = products.findIndex((item) => item.id === productId);

    products.splice(productIndex, 1)

    return response.status(400).json("Excluido com sucesso!")




});








export default routes