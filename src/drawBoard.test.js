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
