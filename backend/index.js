const express = require('express')
const app = express()
//app.use(cors())
const port = 3001
app.use(express.json())
//Available Routes
app.use('/', require('.'))
app.listen(port, () => {
  console.log(`iNoteBook Backend listening on port  http://localhost:${port}`)
})