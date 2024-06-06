import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

let teaData = [
    {'id':1,'name':'Masala Tea','price':'Rs.100.00'},
    {'id':2,'name':'Ginger Tea','price':'Rs.150.00'},
    {'id':3,'name':'Lemon Tea','price':'Rs.200.00'}
]

let NextId = 4

// Get all teas details
app.get('/teas', (req,res) => {
    res.status(200).send(teaData)
})

// Get tea with specific id
app.get('/teas/:id', (req,res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (tea === undefined){
        res.status(404).send("Not found")
    }
    else {
        res.status(200).send(tea)
    }
})

// Create tea with name and price
app.post('/teas', (req,res) => {
    const {name,price} = req.body
    const tea = {"id":NextId++, name, price}
    teaData.push(tea)
    res.status(200).send(teaData)
})

// Update tea record by id
app.put('/teas/:id', (req,res) => {
    const tea = teaData.find( t => t.id === parseInt(req.params.id))
    if (tea){
        const {name,price} = req.body
        tea.name = name
        tea.price = price
        res.status(200).send(tea)
    }
    else{
        res.status(404).send("Not Found")
    }
})

// Delete a tea record with by id
app.delete('/teas/:id', (req,res) => {
    const teaId = teaData.findIndex(t => t.id === parseInt(req.params.id))
    if (teaId !== -1){
        teaData.splice(teaId,1)
        res.status(200).send(teaData)
    }
    else{
        res.status(404).send("Not Found")
    }
})


app.listen( port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}...`)
})