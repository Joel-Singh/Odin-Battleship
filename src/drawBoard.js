
function drawBoard() {
  let board = document.createElement('div')
  board.classList.add('board')
  add100CellsTo(board)
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

export default drawBoard
