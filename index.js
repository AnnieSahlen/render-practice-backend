const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.send({ success: `It's working!` })
})

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
