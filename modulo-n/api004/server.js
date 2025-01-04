const express = require('express')
const app = express()
const data = require("./data.json")
app.unsubscribe(express.json())
// Verbos HTTP
// GET: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processados por um Resource.
// PUT: Atualizar dados de um Resource.
// DELETE: Deletar um Resource.
app.get("/clients", function(requests, response){
    response.json(data)
}) //boa prática não utilizar / no final do endpoint
app.get("/clients/:id", function(requests, response){
    const { id } = requests.params
    const client = data.find(cliente => cliente.id == id)
    if(!client) return response.status(204).json()
    response.json(client)
}) //boa prática não utilizar / no final do endpoint
app.post("/clients", function(requests, response){
    const { name, email } = requests.body
    // salvar
    response.json({ name, email })
}) //utilizar um padrão: plural ou singular
app.put("/clients/:id", function(requests, response){
    const { id } = requests.params
    const client = data.find(client => client.id == id)
    if(!client) return response.status(204).json()
    const { name } = requests.body
    client.name = name
    response.json(client)
})
app.delete("/clients", function(requests, response){
    const { id } = requests.params
    const clientsFiltred = data.filter(client => client.id != id)
    response.json(clientsFiltred)
})
app.listen(3000, function(){
    console.log("Server is running")
})