import express from 'express' 
import add from './src/DB/database.js'
import deleteCom from './src/DB/delete.js'
const app = express()
const port = 4633


app.use(express.json())


app.get('/insert', (req, res) => {

  add()
  res.send('GET request to the homepage')
})

app.post('/delete', function (req, res) {
deleteCom();
  res.send('POST request to the homepage')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))