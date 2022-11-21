import Gameboard from "./gameboard";
import { allowOneCellToBeHit } from "./mainGameLoop";
import { initializeDOMWithTwoGameboards } from  './DOM'

let playerObjBoard = Gameboard()
let enemyObjBoard = Gameboard()
initializeDOMWithTwoGameboards(playerObjBoard, enemyObjBoard)

async function gameLoop() {
  while (true) {
    await allowOneCellToBeHit(enemyDOMBoard, enemyObjBoard)
  }
}
gameLoop()
