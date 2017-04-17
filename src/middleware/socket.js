import io from 'socket.io-client'
import { syncAndValidate, dealBoard } from '../actions/boardActions'

const sock = io('http://localhost:8888/')

const socketMiddleware = ({ getState, dispatch }) => {
  sock.on('new', cards => dispatch(dealBoard(cards)))
  sock.on('select', selectedCards => dispatch(syncAndValidate(selectedCards)))

  return next => (action) => {
    const result = next(action)

    if (action.type === 'TOGGLE_SELECT') return sock.emit('set', getState().selectedCards)
    return result
  }
}

export default socketMiddleware
