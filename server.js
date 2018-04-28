const express = require('express')
const path = require('path')
const multer = require('multer')
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024
  }
})

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'))
})

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({fileSize: req.file.size})
})

app.listen(port, () => {
  console.log('file metadata microservice is on port: ', port)
})
