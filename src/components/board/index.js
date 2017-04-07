import { connect } from 'react-redux'

import {
  dealBoard,
  toggleSelect,
  validateSet
} from '../../actions/boardActions'

import Board from './board'

import './board.css'

const mapStateToProps = ({ board, selectedCards }) => ({ board, selectedCards })

const mapDispatchToProps = dispatch => ({
  dealBoard() {
    dispatch(dealBoard())
  },
  onCardClick(card) {
    dispatch(toggleSelect(card))
  },
  validateSet() {
    dispatch(validateSet())
  }
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
