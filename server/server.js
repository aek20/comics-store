import express from 'express' 
import add from './src/DB/database.js'
import deleteCom from './src/DB/delete.js'
import show from './src/DB/showComics.js'
import update from './src/DB/update.js'
import bodyParser from "body-parser"
const app = express()
const port = 3934


app.use(express.json())
const urlencodedParser=app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/insert', urlencodedParser, (req, res) => {
  // name: name,
//    email: company,
//       quantity: quantity,
//          number: number
const name=res.body.name
  const email = res.body.email
  const quantity = res.body.quantity
  const number = res.body.number
  add(name, email, quantity, number)
  res.send('POST request to the homepage')
})

app.post('/delete', function (req, res) {
deleteCom();
  res.send('POST request to the homepage')
})

app.get('/show', (req, res) => {
 show()
  res.send('show data')
})

app.post('/update', function (req, res) {
  update()
  res.send('update')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))