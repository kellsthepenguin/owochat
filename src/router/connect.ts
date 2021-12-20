import Router from 'koa-router'

import jwt from 'jsonwebtoken'
import { rooms, key } from '../global'
import Pair from '../classes/Pair'

const router = new Router()

router.post('/room/:id', (ctx) => {
  rooms.set(ctx.params.id, new Pair())
})

router.get('/room/:id', (ctx) => {
  if (!rooms.has(ctx.params.id)) {
    ctx.body = { error: 'that room dosn\'t exists'}
  } else {
    const token = jwt.sign({ room: ctx.params.id }, key, {
      expiresIn: '1h'
    })

    ctx.body = { token }
  }
})

export default router
