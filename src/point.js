export function Point(x, y) {
  function getX() {
    return x;
  }
  function getY() {
    return y;
  }
  return { getX, getY };
}

export function PointList() {
  let pointArr = [];
  function add(x, y) {
    let newPoint = Point(x, y);
    pointArr.push(newPoint);
  }
  function has(x, y) {
    let pointIndex = pointArr.findIndex(
      (point) => {
        let sameX = point.getX() === x
        let sameY = point.getY() === y
        let sameXandY = sameX && sameY
        return sameXandY
      }
    )
    let hasPoint = pointIndex !== -1
    return hasPoint
  }
  return { add, has };
}
