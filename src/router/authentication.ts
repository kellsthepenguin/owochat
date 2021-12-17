import Router from 'koa-router'

const router = new Router({
  prefix: '/auth'
})

router.post('/register', (ctx) => {
  ctx.body = ctx.path
})

router.get('/token', (ctx) => {
  ctx.body = ctx.path
})

export default router
