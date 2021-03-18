import 'reflect-metadata';
import express from 'express';
import createConnection from  "./database";
import { router } from './routes';

createConnection();
const app = express();

// /**
//  * GET => buscar
//  * POST => salvar
//  * PUT => alterar
//  * DELETE => deletar
//  * PATCH => alteração específica
//  */
// app.get("/", (request, response) => {

//     return response.json({message: "Hello Word"});
// })

// //primeiro param é a rota, e o segundo é o que recebe e retorna
// app.post("/", (request, response) => {

//     //recebeu os dados para salvar
//     return response.json({message: "Salvo com sucesso"});
// })

app.use(express.json());
app.use(router);

export { app };