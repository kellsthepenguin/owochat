import Koa from 'koa'

import connect from './router/connect'

const app = new Koa()

app // connection
  .use(connect.routes())
  .use(connect.allowedMethods())

app.listen(8080)
