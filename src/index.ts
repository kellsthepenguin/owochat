import Koa from 'koa'
import { createServer } from 'http'

import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import { io } from './global'

import connect from './router/connect'
import message from './router/message'
import registIo from './socketio'

const app = new Koa()

const server = createServer(app.callback())

app.use(bodyParser())
app.use(cors())

app // connection
  .use(connect.routes())
  .use(connect.allowedMethods())

app
  .use(message.routes())
  .use(message.allowedMethods())

registIo(io)

io.listen(server)
server.listen(8080)
