function Gameboard() {
  function isHit(x, y) {
    return hits.includes(`${x}${y}`)
  }

  let hits = []
  function hit(x, y) {
    hits.push(`${x}${y}`)
  }

  let positionsOccupiedByShips = [];
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
      positionsOccupiedByShips.push({ x: x + xChange, y: y + yChange });
    }
  }

  function allShipsSunk() {
    for (const shipPosition of positionsOccupiedByShips) {
      let shipPositionHit = this.isHit(shipPosition.x, shipPosition.y);
      if (!shipPositionHit) return false;
    }
    return true;
  }

  function getAllShipPositions() {
    return structuredClone(positionsOccupiedByShips)
  }
  return { isHit, hit, placeShip, allShipsSunk, getAllShipPositions};
}

export default Gameboard;
