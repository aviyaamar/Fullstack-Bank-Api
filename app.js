const express = require('express')

const cors = require('cors');
const path = require('path');

const app = express()

const port = process.env.PORT|| 5000


require('./server/db/mongoose')
const userRouter = require('./server/router/userRouter')

const publicPath = path.join(__dirname, 'client/build');
app.use(cors());
app.use(express.static(publicPath));

app.use(express.json())
app.use(userRouter)


app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
  });


app.listen(port, ()=>{
    console.log(`listen to port ${port}`);
})