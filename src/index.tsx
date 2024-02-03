import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get('/about', async (c) => {
  const res = await fetch('https://weather.tsukumijima.net/api/forecast/city/400040')
  const data = await res.json()
  // console.log(JSON.stringify(data, null, 2));
  const html = JSON.stringify(data, null, 2);
  return c.render(<h1>About! {html}</h1>)
})

app.get('/ping', async (c) => {
  const res = await fetch('https://ev2-prod-node-red-11839213-b3c.herokuapp.com/')
  const data = await res.json()
  // console.log(JSON.stringify(data, null, 2));
  const html = JSON.stringify(data, null, 2);
  return c.render(<h1>ping! {html}</h1>)
})



export default app
