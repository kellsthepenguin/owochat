import { key, rooms } from './global'

import jwt, { JwtPayload } from 'jsonwebtoken'
import { Server } from 'socket.io'

function registIo (io: Server) {
  io.on('connection', (socket) => {
    const token = socket.handshake.query.token as string
    const publicKey = socket.handshake.query.publicKey as string

    if (!token) socket.disconnect()
    if (!publicKey) socket.disconnect()

    jwt.verify(token, key, (err) => {
      if (err) socket.disconnect()
    })

    if (!socket.disconnected) {
      const { roomId } = jwt.decode(token) as JwtPayload
      const room = rooms.get(roomId)!

      if (!room.first) return room.first = socket.id
      if (room.second) {
        return socket.disconnect()
      }
      room.second = socket.id
    }
  })
}

export default registIo
