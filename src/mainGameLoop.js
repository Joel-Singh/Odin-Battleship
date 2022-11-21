import { drawBoard } from "./drawBoard"

function allowOneCellToBeHit(DOMBoard, ObjBoard) {
  let allCells = [...DOMBoard.querySelectorAll('.cell')]
  addHitFunctionToAll()

  let cellHasBeenHitResolvePromise;
  return new Promise((resolve) => {
    cellHasBeenHitResolvePromise = resolve
  })

  function hitFunction(e) {
    e.target.classList.add('hit')
    updateObjBoard()
    removeHitFunctionFromAll()
    cellHasBeenHitResolvePromise()

    function updateObjBoard() {
      let x = Number.parseInt(e.target.getAttribute('data-x'))
      let y = Number.parseInt(e.target.getAttribute('data-y'))
      ObjBoard.hit(x, y)
    }
  }

  function addHitFunctionToAll() {
    allCells.forEach(
      cell =>
        cell.addEventListener('click', hitFunction)
    )
  }

  function removeHitFunctionFromAll() {
    allCells.forEach(
      cell =>
        cell.removeEventListener('click', hitFunction)
    )
  }


}

function initializeDOMWithTwoGameboards() {
  let body = document.querySelector('body')
  let gameBoards = createTwoGameBoards()
  body.append(gameBoards)


  function createTwoGameBoards() {
    let playerSide = createSide('Player', 'player-side')
    let enemySide = createSide('Enemy', 'enemy-side')
    let gameWrapper = createGameWrapper()
    gameWrapper.append(playerSide, enemySide)
    return gameWrapper

    function createSide(title, className) {
      let sideWrapper = createSideWrapper()
      let sideTitle = createSideTitle()
      let board = createBoard()

      sideWrapper.append(sideTitle, board)

      return sideWrapper

      function createSideWrapper() {
        let sideWrapper = document.createElement('span')
        sideWrapper.classList.add('side-wrapper')
        sideWrapper.classList.add(className)
        return sideWrapper
      }

      function createSideTitle() {
        let sideTitle = document.createElement('div')
        sideTitle.classList.add('side-title')
        sideTitle.textContent = title
        return sideTitle
      }

      function createBoard() {
        let board = drawBoard()
        return board
      }
    }

    function createGameWrapper() {
      let gameWrapper = document.createElement('div')
      gameWrapper.classList.add('game-wrapper')
      return gameWrapper
    }
  }
}

export { initializeDOMWithTwoGameboards, allowOneCellToBeHit }
