/**
 * @jest-environment jsdom
 */

import PointList from './pointList'
import Gameboard from './gameboard';


import drawBoard from "./drawBoard";

let gameboard
beforeEach(() => {
 gameboard = Gameboard()
})

test("A element with class board is returned", () => {
  let boardHasBoardClass = drawBoard(gameboard).classList.contains("board");
  expect(boardHasBoardClass).toBe(true);
});

test("There are 100 cells in the board", () => {
  let numberOfCells = drawBoard(gameboard).querySelectorAll(".cell").length;
  expect(numberOfCells).toBe(100);
});

test("Cell at (3, 5) has correct data attributes", () => {
  let threeFiveCell = drawBoard(gameboard).querySelector(":scope :nth-child(53)")
  let dataX = threeFiveCell.getAttribute('data-x')
  let dataY = threeFiveCell.getAttribute('data-y')
  expect(dataX).toBe('3')
  expect(dataY).toBe('5')
})

test("Cell at (6, 8) has correct data attributes", () => {
  let twoSixCell = drawBoard(gameboard).querySelector(":scope :nth-child(26)")
  let dataX = twoSixCell.getAttribute('data-x')
  let dataY = twoSixCell.getAttribute('data-y')
  expect(dataX).toBe('6')
  expect(dataY).toBe('8')
})

test("Cell at (10, 10) has correct data attributes", () => {
  let tenTenCell = drawBoard(gameboard).querySelector(":scope :nth-child(10)")
  let dataX = tenTenCell.getAttribute('data-x')
  let dataY = tenTenCell.getAttribute('data-y')
  expect(dataX).toBe('10')
  expect(dataY).toBe('10')
})

test("Cell at (10, 5) has correct data attributes", () => {
  let tenTenCell = drawBoard(gameboard).querySelector(":scope :nth-child(60)")
  let dataX = tenTenCell.getAttribute('data-x')
  let dataY = tenTenCell.getAttribute('data-y')
  expect(dataX).toBe('10')
  expect(dataY).toBe('5')
})

test("Draw board with hit on (5, 10)", () => {
  gameboard.hit(5, 10)
  let board = drawBoard(gameboard);
  let cell = board.querySelector(":scope :nth-child(5)");
  let cellHasHitClass = cell.classList.contains("hit");
  expect(cellHasHitClass).toBe(true);
});

test("Draw board with hit on (3, 1)", () => {
  gameboard.hit(3, 1)
  let board = drawBoard(gameboard);
  let cell = board.querySelector(":scope :nth-child(93)");
  let cellHasHitClass = cell.classList.contains("hit");
  expect(cellHasHitClass).toBe(true);
});

test("Draw board with hit on (5, 5)", () => {
  gameboard.hit(5, 5)
  let board = drawBoard(gameboard);
  let cell = board.querySelector(":scope :nth-child(55)");
  let cellHasHitClass = cell.classList.contains("hit");
  expect(cellHasHitClass).toBe(true);
});

test("Draw board with hit on (2, 7) AND (3, 8)", () => {
  gameboard.hit(2, 7)
  gameboard.hit(3, 8)
  let board = drawBoard(gameboard);

  let twoSevenCell = board.querySelector(":scope :nth-child(32)");
  let twoSevenCellHasHitClass = twoSevenCell.classList.contains("hit");

  let threeEightCell = board.querySelector(":scope :nth-child(23)");
  let threeEightCellHasHitClass = threeEightCell.classList.contains("hit");

  expect(twoSevenCellHasHitClass).toBe(true);
  expect(threeEightCellHasHitClass).toBe(true);
});

test("Draw board with a ship on (4, 3)", () => {
  gameboard.placeShip(4, 3, 1, 'up')
  let board = drawBoard(gameboard);

  let fourThree = board.querySelector(":scope :nth-child(74)");
  let fourThreeHasShipClass = fourThree.classList.contains("ship");
  expect(fourThreeHasShipClass).toBe(true);
});

test("Draw board with a ship on (4, 3) AND (8, 2)", () => {
  gameboard.placeShip(4, 3, 1, 'up')
  gameboard.placeShip(8, 2, 1, 'up')

  let board = drawBoard(gameboard);
  let fourThree = board.querySelector(":scope :nth-child(74)");
  let fourThreeHasShipClass = fourThree.classList.contains("ship");

  let eightTwo = board.querySelector(":scope :nth-child(88)");
  let eightTwoHasShipClass = eightTwo.classList.contains("ship");

  expect(fourThreeHasShipClass).toBe(true);
  expect(eightTwoHasShipClass).toBe(true);
});
