import io from 'socket.io-client'
import { syncAndValidate, dealBoard } from '../actions/boardActions'
import { pauseForSelect } from '../actions/setButtonActions'
import { newGameCreated } from '../actions/newGameFormActions'

let initialized = false
let socket

const socketMiddleware = ({ getState, dispatch }) => {
  const initializeSocket = () => {
    if (socket) return
    socket = io('http://localhost:8888/')
    socket.on('new', ({ id, cards }) => {
      dispatch(dealBoard(cards))
      dispatch(newGameCreated(id))
    })
    socket.on('select', selectedCards => dispatch(syncAndValidate(selectedCards)))
    socket.on('pauseForSet', () => dispatch(pauseForSelect()))
    socket.on('roomTest', payload => {console.log(payload)})
  }

  initializeSocket()

  return next => (action) => {
    if (!action) return
    initializeSocket()

    const result = next(action)

    //if (action.type === 'START_NEW_GAME') initializeSocket()

    if (socket) {
      if (action.type === 'START_NEW_GAME') socket.emit('newGame', action.userName)
      if (action.type === 'TOGGLE_SELECT') return socket.emit('set', getState().selectedCards)
      if (action.type === 'IS_CHOOSING') socket.emit('choosingSet')
    }
    return result
  }
}

export default socketMiddleware

