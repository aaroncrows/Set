import {
  SIGN_IN,
  SIGN_OUT
} from '../constants'

const signIn = userName => (
  { type: SIGN_IN, userName }
)

const signOut = () => (
  { type: SIGN_OUT }
)

export {
  signIn,
  signOut
}
