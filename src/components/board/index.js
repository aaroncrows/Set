import { connect } from 'react-redux'

import {
  dealBoard,
  toggleSelect,
  clearSelect,
  validateSet
} from '../../actions/actions'

import Board from './board'

import './board.css'

const mapStateToProps = ({ board, selectedCards }) => ({ board, selectedCards })

const mapDispatchToProps = (dispatch) => ({
  dealBoard() {
    dispatch(dealBoard())
  },
  onCardClick(card) {
    dispatch(toggleSelect(card))
  },
  clearSelect() {
    dispatch(clearSelect())
  },
  validateSet() {
    dispatch(validateSet())
  }
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
