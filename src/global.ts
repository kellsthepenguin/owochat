import fs from 'fs'

const key = fs.readFileSync('../private.key')
const rooms = new Map()

export {
  rooms,
  key
}
