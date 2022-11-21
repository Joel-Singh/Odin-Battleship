import Gameboard from "./gameboard";
import { allowOneCellToBeHit, initializeDOMWithTwoGameboards } from "./mainGameLoop";

initializeDOMWithTwoGameboards()
let playerDOMBoard = document.querySelector('.player-side .board')
let playerObjBoard = Gameboard()

let enemyDOMBoard = document.querySelector('.enemy-side .board')
let enemyObjBoard = Gameboard()

async function gameLoop() {
  while (true) {
    await allowOneCellToBeHit(enemyDOMBoard, enemyObjBoard)
  }
}
gameLoop()
