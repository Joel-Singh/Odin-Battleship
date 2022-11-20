export function Point(x, y) {
  function getX() {
    return x
  }
  function getY() {
    return y
  }
  return {getX, getY}
}

export function PointList() {
  let pointArr = []
  function add(x, y) {
    let newPoint = Point(x, y)
    pointArr.push(newPoint)
  }
  function has(x, y) {
    return pointArr.findIndex((point) =>
      point.getX() === x && point.getY() === y
    ) !== -1
  }
  return {add, has}
}
