
function drawBoard(x, y) {
  let board = createBoardWithCells()

  if (x !== undefined) {
    getCell(x, y, board).classList.add('hit')
  }

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

export default drawBoard
