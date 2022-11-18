import Gameboard from "./gameboard";

let gameboard
beforeEach(() => {
  gameboard = Gameboard()
})

test("isHit should return false after not hitting", () => {
  expect(gameboard.isHit(3, 8)).toBe(false)
})

test("isHit should return true after hitting", () => {
  gameboard.hit(2, 9)
  expect(gameboard.isHit(2, 9)).toBe(true)
})

test("isHit should return false after hitting and checking a different spot", () => {
  gameboard.hit(4, 10)
  expect(gameboard.isHit(2, 9)).toBe(false)
})

test("allShipsSunk return false after adding ship", () => {
  gameboard.placeShip(0, 0, 1, 'up')
  expect(gameboard.allShipsSunk()).toBe(false)
})

test("allShipsSunk return true after adding and sinking ship", () => {
  gameboard.placeShip(5, 4, 1, 'up')
  gameboard.hit(5, 4)
  expect(gameboard.allShipsSunk()).toBe(true)
})

test("allShipsSunk return false after adding and not hitting ship", () => {
  gameboard.placeShip(5, 4, 1, 'up')
  gameboard.hit(9, 2)
  expect(gameboard.allShipsSunk()).toBe(false)
})


test("allShipsSunk return false after adding 2 ships and only hitting 1", () => {
  gameboard.placeShip(5, 4, 1, 'up')
  gameboard.placeShip(9, 2, 1, 'up')
  gameboard.hit(9, 2)
  expect(gameboard.allShipsSunk()).toBe(false)
})


test("allShipsSunk return false after adding a ship of length 2 and only hitting it once", () => {
  gameboard.placeShip(0, 0, 2, 'up')
  gameboard.hit(0, 0)
  expect(gameboard.allShipsSunk()).toBe(false)
})

test("allShipsSunk return false after adding a ship of length 3 and hitting it twice", () => {
  gameboard.placeShip(0, 0, 3, 'up')
  gameboard.hit(0, 0)
  gameboard.hit(0, 1)
  expect(gameboard.allShipsSunk()).toBe(false)
})

test("allShipsSunk return true after adding ship of length 5 in a right orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, 'right')
  gameboard.hit(4, 5)
  gameboard.hit(4 + 1, 5)
  gameboard.hit(4 + 2, 5)
  gameboard.hit(4 + 3, 5)
  gameboard.hit(4 + 4, 5)
  expect(gameboard.allShipsSunk()).toBe(true)
})

test("allShipsSunk return false after adding ship of length 5 in a down orientation and then not sinking it", () => {
  gameboard.placeShip(4, 5, 5, 'down')
  gameboard.hit(4, 5)
  gameboard.hit(4, 5 - 4)
  expect(gameboard.allShipsSunk()).toBe(false)
})

test("allShipsSunk return true after adding ship of length 5 in a down orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, 'down')
  gameboard.hit(4, 5)
  gameboard.hit(4, 5 - 1)
  gameboard.hit(4, 5 - 2)
  gameboard.hit(4, 5 - 3)
  gameboard.hit(4, 5 - 4)
  expect(gameboard.allShipsSunk()).toBe(true)
})

test("allShipsSunk return true after adding ship of length 5 in a up orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, 'up')
  gameboard.hit(4, 5)
  gameboard.hit(4, 5 + 1)
  gameboard.hit(4, 5 + 2)
  gameboard.hit(4, 5 + 3)
  gameboard.hit(4, 5 + 4)
  expect(gameboard.allShipsSunk()).toBe(true)
})

test("allShipsSunk return true after adding ship of length 5 in a left orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, 'left')
  gameboard.hit(4, 5)
  gameboard.hit(4 - 1, 5)
  gameboard.hit(4 - 2, 5)
  gameboard.hit(4 - 3, 5)
  gameboard.hit(4 - 4, 5)
  expect(gameboard.allShipsSunk()).toBe(true)
})
