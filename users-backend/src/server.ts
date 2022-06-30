import express from 'express';

const app = express();

app.listen(3000, () => { console.log(`Rodando ${process.env.PROJECT_NAME} na porta 3000`)});