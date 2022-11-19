/**
 * @jest-environment jsdom
 */

import drawBoard from "./drawBoard";

test("A element with class board is returned", () => {
  let boardHasBoardClass = drawBoard().classList.contains("board");
  expect(boardHasBoardClass).toBe(true);
});

test("There are 100 cells in the board", () => {
  let numberOfCells = drawBoard().querySelectorAll(".cell").length;
  expect(numberOfCells).toBe(100);
});

test("Draw board with hit on (5, 10)", () => {
  let board = drawBoard([[5, 10]]);
  let cell = board.querySelector(":scope :nth-child(5)");
  let cellHasHitClass = cell.classList.contains("hit");
  expect(cellHasHitClass).toBe(true);
});

test("Draw board with hit on (3, 1)", () => {
  let board = drawBoard([[3, 1]]);
  let cell = board.querySelector(":scope :nth-child(93)");
  let cellHasHitClass = cell.classList.contains("hit");
  expect(cellHasHitClass).toBe(true);
});

test("Draw board with hit on (5, 5)", () => {
  let board = drawBoard([[5, 5]]);
  let cell = board.querySelector(":scope :nth-child(55)");
  let cellHasHitClass = cell.classList.contains("hit");
  expect(cellHasHitClass).toBe(true);
});

test("Draw board with hit on (2, 7) AND (3, 8)", () => {
  let board = drawBoard([
    [2, 7],
    [3, 8],
  ]);

  let twoSevenCell = board.querySelector(":scope :nth-child(32)");
  let twoSevenCellHasHitClass = twoSevenCell.classList.contains("hit");

  let threeEightCell = board.querySelector(":scope :nth-child(23)");
  let threeEightCellHasHitClass = threeEightCell.classList.contains("hit");

  expect(twoSevenCellHasHitClass).toBe(true);
  expect(threeEightCellHasHitClass).toBe(true);
});

test("Draw board with a ship on (4, 3)", () => {
  let board = drawBoard([], [[4, 3]]);
  let fourThree = board.querySelector(":scope :nth-child(74)");
  let fourThreeHasShipClass = fourThree.classList.contains("ship");
  expect(fourThreeHasShipClass).toBe(true);
});

test("Draw board with a ship on (4, 3) AND (8, 2)", () => {
  let board = drawBoard(
    [],
    [
      [4, 3],
      [8, 2],
    ]
  );
  let fourThree = board.querySelector(":scope :nth-child(74)");
  let fourThreeHasShipClass = fourThree.classList.contains("ship");

  let eightTwo = board.querySelector(":scope :nth-child(88)");
  let eightTwoHasShipClass = eightTwo.classList.contains("ship");

  expect(fourThreeHasShipClass).toBe(true);
  expect(eightTwoHasShipClass).toBe(true);
});
