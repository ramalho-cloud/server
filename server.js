import express from "express";
const app  = express ();
app.get("/", (req,res) =>{
    res.send("servidor rodando!🚀")
});
app.get("/status", (req,res) =>{
    res.json({status: "online", sprint: 1 });
});
app.get("/sobre", (req, res) =>{
    res.send("Mensageiro Local - Criado no SENAI")
});
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`)
});