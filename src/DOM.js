import drawBoard from './drawBoard'
export function initializeDOMWithTwoGameboards(playerBoard, enemyBoard) {
  let body = document.querySelector('body')
  let gameBoards = createTwoGameBoards()
  body.append(gameBoards)


  function createTwoGameBoards() {
    let playerSide = createSide('Player', 'player-side', playerBoard)
    let enemySide = createSide('Enemy', 'enemy-side', enemyBoard)
    let gameWrapper = createGameWrapper()
    gameWrapper.append(playerSide, enemySide)
    return gameWrapper

    function createSide(title, className, objBoard) {
      let sideWrapper = createSideWrapper()
      let sideTitle = createSideTitle()
      let domBoard = drawBoard(objBoard)

      sideWrapper.append(sideTitle, domBoard)

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
    }

    function createGameWrapper() {
      let gameWrapper = document.createElement('div')
      gameWrapper.classList.add('game-wrapper')
      return gameWrapper
    }
  }
}
