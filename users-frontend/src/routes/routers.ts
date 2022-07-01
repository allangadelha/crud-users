import express from "express";

const routers = express.Router();

routers.get('/', async (req, res) => {
    res.send("Hello word!");
});

// routers.get('/login', async (req, res) => {
//     res.sendFile("../../index.html");
// });

export { routers };