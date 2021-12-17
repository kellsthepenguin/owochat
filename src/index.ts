import Koa from 'koa'

import authentication from './router/authentication'

const app = new Koa()

app // Authentication
  .use(authentication.routes())
  .use(authentication.allowedMethods())

app.listen(8080)
