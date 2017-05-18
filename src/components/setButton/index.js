import { connect } from 'react-redux'
import button from './setButton'

import { chooseSet } from '../../actions/setButtonActions'
const mapStateToProps = ({ disabled: { setButtonDisabled } }) => ({ setButtonDisabled })

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(chooseSet())
})

const SetButton = connect(mapStateToProps, mapDispatchToProps)(button)

export default SetButton

