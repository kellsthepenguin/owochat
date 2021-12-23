import fs from 'fs'
import { Server } from 'socket.io'
import Pair from './classes/Pair'

const key = fs.readFileSync('../private.key')
const rooms: Map<string, Pair> = new Map()
const io = new Server() // socket.io

export {
  rooms,
  key,
  io
}
