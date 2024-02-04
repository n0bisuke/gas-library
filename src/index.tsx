import { Hono } from 'hono'
import { renderer } from './renderer'
import { css, cx, keyframes, Style } from 'hono/css'

const headerClass = css`
  background: linear-gradient(transparent 50%, #ffa64d 65%);
`

import getDB from './db'
const db = getDB();
console.log('db:', db);

let gasLiHtml: Array<any> = [];
for (let i = 0,len = db.length; i < len; i++) {
    gasLiHtml.push(
    <li>
        [<a href={"libs/"+db[i].id}>{db[i].name}</a>]{db[i].description} <br/>
        Script ID:<em class={headerClass}>{db[i].scriptId}</em>
        <br/>
    </li>);
}

const app = new Hono()
app.use(renderer)

const TITLE = 'Google Apps Script - 3rd Paty Library List';
app.get('/', (c) => {
  return c.render(
    <div>
      <h1>{TITLE}</h1>
      <p>A search function will be added soon. / 検索機能はそのうちつけます。</p>
        <ul>
            {gasLiHtml}
        </ul>
        <p>Lastupdate. {new Date().toLocaleString()}</p>
        <a href="./about">about</a>
    </div>,
    {
        title: TITLE
    }
  )
})


app.get('/about', (c) => {
    return c.render(
      <div>
        <h1>About us</h1>
        <p>by @n0bisuke</p>
      </div>
    )
})

//各ITEMのページ
// const pages = db.map(libitem => libitem.id);
db.forEach(page => {
    app.get(`/libs/${page.id}`, (c) => {
        return c.render(
          <div>
            <h1>{page.name} - {TITLE}</h1>
            <p>{page.description}</p>
            <p>{page.description_en}</p>
            <p>Script ID: <em class={headerClass}>{page.scriptId}</em></p>
            <p><a href={page.url} target="_blank">関連URL(外部)</a></p>
            <p></p>
            <p>by @n0bisuke</p>
          </div>
        )
      })    
});

export default app