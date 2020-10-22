// const express = require('express')
// const SocketServer = require('ws').Server
// const PORT = 3000
// const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`))
// const wss = new SocketServer({ server })
// wss.on('connection', (ws, req) => {
//   console.log('ip', ws._socket.remoteAddress, req.connection.remoteAddress)
//   ws.on('message', data => {
//     let clients = wss.clients
//     clients.forEach(client => {
//       client.send(data)
//     })
//   })
//   ws.on('close', () => {
//     console.log('Close connected')
//   })
// })

const express = require('express')
const app = express()

const port = 5000

// Body parser
app.use(express.urlencoded({ extended: false }))

// Home route
app.get('/', (req, res) => {
  const WebSocket = require('ws')
  const wss = new WebSocket.Server({
    port: 9003
  })
  wss.on('connection', ws => {
    console.log('加入websocket连接')
    ws.on('open', () => {
      ws.send('连接已开启')
    })
    ws.on('message', data => {
      let clients = wss.clients
      clients.forEach(client => {
        client.send(data)
      })
    })
  })
})

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000 Visit http://localhost:5000`)
})
