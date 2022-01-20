const express = require('express')
const app = express()
require('./server/db/mongoose')
const userRouter = require('./server/router/userRouter')

app.use(express.json())
app.use(userRouter)

const port = process.env.PORT|| 5000

app.listen(port, ()=>{
    console.log(`listen to port ${port}`);
})