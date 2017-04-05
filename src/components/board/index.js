import { connect } from 'react-redux'

import { dealBoard } from '../../actions/actions'
import { DEAL_BOARD } from '../../constants'

import Board from './board'

const mapStateToProps = ({ board }) => ({ board })

const mapDispatchToProps = (dispatch) => ({
  dealBoard() {
    dispatch(dealBoard())
  }
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
