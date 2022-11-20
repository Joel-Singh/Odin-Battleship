import PointList from "./pointList";

function Gameboard() {
  function isHit(x, y) {
    return hits.has(x, y)
  }

  let hits = PointList()
  function hit(x, y) {
    hits.add(x, y)
  }

  let positionsOccupiedByShips = PointList()
  function placeShip(x, y, length, direction) {
    let xChange = 0;
    let yChange = 0;
    for (let i = 0; i < length; i++) {
      xChange = 0;
      yChange = 0;

      if (direction === "up") yChange = i;
      else if (direction === "down") yChange = -i;
      else if (direction === "right") xChange = i;
      else if (direction === "left") xChange = -i;
      positionsOccupiedByShips.add(x + xChange, y + yChange);
    }
  }

  function allShipsSunk() {
    let allShipsSunkBool = true

    positionsOccupiedByShips.forEach((x, y) => {
      let isShipHit = this.isHit(x, y)
      if (!isShipHit)
        allShipsSunkBool = false
    })

    return allShipsSunkBool;
  }

  function getAllShipPositions() {
    return positionsOccupiedByShips.clone()
  }

  function getAllHits() {
    return hits.clone()
  }
  return { isHit, hit, placeShip, allShipsSunk, getAllShipPositions, getAllHits};
}

export default Gameboard;
