/**
 * @jest-environment jsdom
 */

import { drawBoard } from "./drawBoard";
import { allowOneCellToBeHit } from './mainGameLoop'

let domBoard;
beforeEach(() => {
  domBoard = drawBoard()
})

test('Hit class added to (3, 4) cell after adding event listener and clicking it', () => {
  allowOneCellToBeHit(domBoard)
  let threeFourCell = domBoard.querySelector('[data-x="3"][data-y="4"]')
  threeFourCell.click()
  let isHit = threeFourCell.classList.contains('hit')
  expect(isHit).toBe(true)
})

test('Hit class added ONLY to (2, 8) cell after adding event listener and clicking it', () => {
  allowOneCellToBeHit(domBoard)
  let twoEightCell = domBoard.querySelector('[data-x="2"][data-y="8"]')
  twoEightCell.click()
  let isTwoEightHit = twoEightCell.classList.contains('hit')
  expect(isTwoEightHit).toBe(true)

  let sixSevenCell = domBoard.querySelector('[data-x="6"][data-y="7"]')
  let isSixSevenHit = sixSevenCell.classList.contains('hit')
  expect(isSixSevenHit).toBe(false)
})

test('Hit class added ONLY to (3, 4) cell after clicking two cells', () => {
  allowOneCellToBeHit(domBoard)

  let threeFourCell = domBoard.querySelector('[data-x="3"][data-y="4"]')
  let nineTwoCell = domBoard.querySelector('[data-x="9"][data-y="2"]')

  threeFourCell.click()
  nineTwoCell.click()

  let isThreeFourHit = threeFourCell.classList.contains('hit')
  let isNineTwoHit = nineTwoCell.classList.contains('hit')

  expect(isThreeFourHit).toBe(true)
  expect(isNineTwoHit).toBe(false)

})
