import express from 'express' 
import add from './src/DB/database.js'
import deleteCom from './src/DB/delete.js'
import show from './src/DB/showComics.js'
const app = express()
const port = 6849


app.use(express.json())


app.get('/insert', (req, res) => {

  add()
  res.send('GET request to the homepage')
})

app.post('/delete', function (req, res) {
deleteCom();
  res.send('POST request to the homepage')
})

app.get('/show', (req, res) => {
 show()
  res.send('show data')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))