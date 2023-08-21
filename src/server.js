import express from 'express'

const app = express()

app.use('/', (req, res) => {
  return res.send({ user: "deu certo" })
})

app.listen(3333, console.log('server is running'))