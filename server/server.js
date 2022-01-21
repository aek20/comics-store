import express from 'express' 
import add from './src/DB/database.js'
const app = express()
const port = 4600


app.use(express.json())


app.get('/insert', (req, res) => {

  add()
  res.send('GET request to the homepage')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))