const connectToMongo = require('./db')
const cors = require('cors')
const express =require('express')

connectToMongo();

const app = express()
const port = 5000

//Available routes
app.use(express.json())

app.use(cors())
app.use('/api/auth', require('./routes/auth'))

app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>")
})

app.get('/api/v1/login', (req, res)=>{
    res.send("<h1>Hello LOGIN</h1>")
})

app.get('/api/v1/signup', (req, res)=>{
    res.send("<h1>Hello SIGNUP</h1>")
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})