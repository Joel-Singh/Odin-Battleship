import Ship from "./ship";

test("if ship is an object", () => {
  let ship = Ship();
  expect(typeof ship === "object" && ship !== null).toBe(true);
});

test("Ship isSunk returns false", () => {
  let ship = Ship(3);
  expect(ship.isSunk()).toBe(false);
});

test("Ship isSunk returns true when hit equal to its length", () => {
  let ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
