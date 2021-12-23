import { io } from '../global'

class Pair {
  first?: string
  second?: string

  broadcast (message: string) {
    io.to(this.first!).emit(message)
    io.to(this.second!).emit(message)
  }
}

export default Pair
