import { connect } from 'react-redux'

import {
  validateIfComplete
} from '../../actions/boardActions'

import Board from './board'

import './board.css'

const mapStateToProps = ({ deck: { board }, disabled: { cardSelectDisabled }, selectedCards }) => (
  { board, selectedCards, cardSelectDisabled }
)

const mapDispatchToProps = dispatch => ({
  onCardClick(card) {
    dispatch(validateIfComplete(card))
  }
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
