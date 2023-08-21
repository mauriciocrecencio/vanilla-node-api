import http from 'node:http'
import { json } from './middlewares/json.js'


const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/users') {
    return res.end(JSON.stringify({ user: "user" }))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body

    const user = {
      id: 1,
      name,
      email,
    }

    return res.end(JSON.stringify(user))
  }
  return res.writeHead(404).end()
})
server.listen(3333)