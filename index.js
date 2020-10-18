// [零距离接触websocket🚀](https://juejin.im/post/6876301731966713869)

const messageDom = document.getElementById('message')
const inputDom = document.getElementById('input')

let ws = new WebSocket('ws://ws-bilibili-al59ht014.vercel.app:3000')
ws.onopen = () => {
  console.log('open connection')
}
ws.onmessage = event => {
  const data = event.data
  const spanDom = document.createElement('span')
  spanDom.style = `animation: go 10s linear; top: ${Random(20, 280)}px; color: ${getRandomColor()}`
  spanDom.innerText = data
  messageDom.appendChild(spanDom)
  setTimeout(() => {
    messageDom.removeChild(spanDom)
  }, 11000)
}
ws.onclose = () => {
  console.log('close connection')
}

input.onchange = e => {
  ws.send(e.target.value)
  input.value = ''
}

function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
