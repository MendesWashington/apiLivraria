const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(400).json({message: 'Hello World'})
})

app.post('/', (req, res) => {
    const { nome } = req.body
    return res.status(201).json(nome)
})

app.get('/:nome', (req, res) => {
    const {nome} = req.params
    return res.status(200).json(nome)
})

app.get('/livros/:nomeLivro', (req, res) => {
    const {nomeLivro} = req.params
    return res.status(200).json({nomeLivro})
})

app.get('/autor/:autor', (req, res) => {
    const { autor } = req.params
    return res.status(200).json({autor})
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})