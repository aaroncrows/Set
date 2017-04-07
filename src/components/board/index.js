import { connect } from 'react-redux'

import { dealBoard, selectCard } from '../../actions/actions'
import { DEAL_BOARD } from '../../constants'

import Board from './board'

import './board.css'

const mapStateToProps = ({ board, selectedCards }) => ({ board, selectedCards })

const mapDispatchToProps = (dispatch) => ({
  dealBoard() {
    dispatch(dealBoard())
  },
  selectCard(card) {
    dispatch(selectCard(card))
  }
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
