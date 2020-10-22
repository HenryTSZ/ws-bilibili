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
