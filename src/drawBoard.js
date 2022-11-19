
function drawBoard(hitPositions) {
  let board = createBoardWithCells()

  if (hitPositions !== undefined)
    addHitClasses(hitPositions, board)

  return board
}

function createBoardWithCells() {
  let board = createBoard()
  add100CellsTo(board)
  return board

  function createBoard() {
    let board = document.createElement('div')
    board.classList.add('board')
    return board
  }

  function add100CellsTo(board) {
    const NUM_OF_CELLS = 100
    for (let i = 0; i < NUM_OF_CELLS; i++) {
      let newCell = createCell()
      board.append(newCell)
    }

    function createCell() {
      let newCell = document.createElement('div')
      newCell.classList.add('cell')
      return newCell
    }
  }

}

// One based index. origin is bottom left
function getCell(x, y, board) {
  let cellNumber = (100 - 10*y) + x
  let hitCell = board.querySelector(`:scope :nth-child(${cellNumber})`)
  return hitCell
}

function addHitClasses(hitPositions, board) {
  for (const singleHitPosition of hitPositions) {
    let x = singleHitPosition[0]
    let y = singleHitPosition[1]
    getCell(x, y, board).classList.add('hit')
  }
}

export default drawBoard
