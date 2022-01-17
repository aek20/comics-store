const  express = require('express') 
const connectDB= require('../server/src/DB/database')
const app = express()
const port = 4513
const insert= require('../server/src/DB/database')

app.use(express.json())


app.get('/insert', (req, res) => {

  insert()
  res.send('GET request to the homepage')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))