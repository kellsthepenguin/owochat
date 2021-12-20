import Koa from 'koa'

import bodyParser from 'koa-bodyparser'

import connect from './router/connect'

const app = new Koa()

app.use(bodyParser())

app // connection
  .use(connect.routes())
  .use(connect.allowedMethods())

app.listen(8080)
