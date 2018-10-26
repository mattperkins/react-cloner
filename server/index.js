import express from 'express'
import path from 'path'

const app = express()

app.get('/*', (req,res) => {
 res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000, () => console.log(':3000'))