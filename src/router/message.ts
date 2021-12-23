import Router from 'koa-router'
import jwt from 'jsonwebtoken'

import { key, rooms } from '../global'

const router = new Router()

router.use((ctx, next) => {
  const token = ctx.body.token as string
  if (!token) return ctx.body = { error: 'token is not exists' }

  jwt.verify(token, key, (err) => {
    if (err) {
      ctx.body = { error: 'token is not vaild' }
    } else {
      next()
    }
  })
})

router.post('/room/:id/message', (ctx) => {
  const { token, message } = ctx.body
  const { roomId } = jwt.decode(token) as { roomId: string }

  const room = rooms.get(roomId)!

  room.broadcast(message)
})

export default router
