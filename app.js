const express = require('express')

const cors = require('cors');
const path = require('path');

const app = express()

const port = process.env.PORT|| 5000


require('./server/db/mongoose')
const userRouter = require('./server/router/userRouter')

const publicPath = path.join(__dirname, 'client/build');
console.log("jjj", publicPath);
app.use(cors());
app.use(express.static(publicPath));

app.use(express.json())
app.use(userRouter)




app.listen(port, ()=>{
    console.log(`listen to port ${port}`);
})