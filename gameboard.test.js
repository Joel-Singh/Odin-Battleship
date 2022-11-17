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
