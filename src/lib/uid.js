// replace with uid lib
let ID = 0

const uid = () => {
  ID += 1
  return ID
}

export default uid
