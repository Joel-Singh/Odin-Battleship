import Gameboard from "./gameboard";

let gameboard;
beforeEach(() => {
  gameboard = Gameboard();
});

test("isHit should return false after not hitting", () => {
  expect(gameboard.isHit(3, 8)).toBe(false);
});

test("isHit should return true after hitting", () => {
  gameboard.hit(2, 9);
  expect(gameboard.isHit(2, 9)).toBe(true);
});

test("isHit should return false after hitting and checking a different spot", () => {
  gameboard.hit(4, 10);
  expect(gameboard.isHit(2, 9)).toBe(false);
});

test("allShipsSunk return false after adding ship", () => {
  gameboard.placeShip(0, 0, 1, "up");
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk return true after adding and sinking ship", () => {
  gameboard.placeShip(5, 4, 1, "up");
  gameboard.hit(5, 4);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("allShipsSunk return false after adding and not hitting ship", () => {
  gameboard.placeShip(5, 4, 1, "up");
  gameboard.hit(9, 2);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk return false after adding 2 ships and only hitting 1", () => {
  gameboard.placeShip(5, 4, 1, "up");
  gameboard.placeShip(9, 2, 1, "up");
  gameboard.hit(9, 2);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk return false after adding a ship of length 2 and only hitting it once", () => {
  gameboard.placeShip(0, 0, 2, "up");
  gameboard.hit(0, 0);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk return false after adding a ship of length 3 and hitting it twice", () => {
  gameboard.placeShip(0, 0, 3, "up");
  gameboard.hit(0, 0);
  gameboard.hit(0, 1);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk return true after adding ship of length 5 in a right orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, "right");
  gameboard.hit(4, 5);
  gameboard.hit(4 + 1, 5);
  gameboard.hit(4 + 2, 5);
  gameboard.hit(4 + 3, 5);
  gameboard.hit(4 + 4, 5);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("allShipsSunk return false after adding ship of length 5 in a down orientation and then not sinking it", () => {
  gameboard.placeShip(4, 5, 5, "down");
  gameboard.hit(4, 5);
  gameboard.hit(4, 5 - 4);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk return true after adding ship of length 5 in a down orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, "down");
  gameboard.hit(4, 5);
  gameboard.hit(4, 5 - 1);
  gameboard.hit(4, 5 - 2);
  gameboard.hit(4, 5 - 3);
  gameboard.hit(4, 5 - 4);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("allShipsSunk return true after adding ship of length 5 in a up orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, "up");
  gameboard.hit(4, 5);
  gameboard.hit(4, 5 + 1);
  gameboard.hit(4, 5 + 2);
  gameboard.hit(4, 5 + 3);
  gameboard.hit(4, 5 + 4);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("allShipsSunk return true after adding ship of length 5 in a left orientation and then sinking it", () => {
  gameboard.placeShip(4, 5, 5, "left");
  gameboard.hit(4, 5);
  gameboard.hit(4 - 1, 5);
  gameboard.hit(4 - 2, 5);
  gameboard.hit(4 - 3, 5);
  gameboard.hit(4 - 4, 5);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("getAllShips returns a ship position after adding a single ship of length 1 at (2, 3)", () => {
  gameboard.placeShip(2, 3, 1, 'up')
  let allShips = gameboard.getAllShipPositions()
  let ship = allShips[0]
  let x = ship.getX()
  let y = ship.getY()
  expect(x).toBe(2)
  expect(y).toBe(3)
})

test("getAllShips returns a ship position after adding a single ship of length 1 at (4, 5)", () => {
  gameboard.placeShip(4, 5, 1, 'up')
  let allShips = gameboard.getAllShipPositions()
  let ship = allShips[0]
  let x = ship.getX()
  let y = ship.getY()
  expect(x).toBe(4)
  expect(y).toBe(5)
})

test("getAllShips returns two ship positions after adding a single ship of length 2 at (4, 5)", () => {
  gameboard.placeShip(4, 5, 2, 'up')
  let allShips = gameboard.getAllShipPositions()
  let hasShipPositionAtFourFive = allShips.
    findIndex
    (
      ship =>
      ship.getX() === 4 &&
      ship.getY() === 5
    ) !== -1
  let hasShipPositionAtFourSix = allShips.
    findIndex
    (
      ship =>
      ship.getX() === 4 &&
      ship.getY() === 6
    ) !== -1

  expect(hasShipPositionAtFourFive).toBe(true)
})
