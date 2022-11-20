function Point(x, y) {
  function getX() {
    return x
  }
  function getY() {
    return y
  }
  return {getX, getY}
}

export default Point
