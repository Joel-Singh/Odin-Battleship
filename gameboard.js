function Gameboard() {
    function isHit(x, y) {
      let isHitProp = `${x}${y} isHit`
      if (this.hasOwnProperty(isHitProp))
        return this[isHitProp]
      else
        return false
    }

    function hit(x, y) {
      this[`${x}${y} isHit`] = true;
    }

    let positionsOccupiedByShips = []
    function placeShip(x, y, ship, direction) {
      let xChange = 0
      let yChange = 0
      for (let i = 0; i < ship.length; i++) {
        xChange = 0
        yChange = 0

        if (direction === 'up') yChange = i
        else if (direction === 'down') yChange = -i
        else if (direction === 'right') xChange = i
        else if (direction === 'left') xChange = -i
        positionsOccupiedByShips.push({x: (x + xChange), y: (y + yChange)})
      }
    }

    function allShipsSunk() {
      for (const shipPosition of positionsOccupiedByShips) {
        let shipPositionHit = this.isHit(shipPosition.x, shipPosition.y)
        if(!shipPositionHit)
          return false
      }
      return true
    }
    return { isHit, hit, placeShip, allShipsSunk };
}

export default Gameboard;
