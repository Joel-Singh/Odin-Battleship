function drawBoardFromGameboard(board) {
  if (board === undefined)
    throw 'No board passed into drawBoardFromGameboard'
  return drawBoard(board.getAllHits(), board.getAllShipPositions())
}

function drawBoard(hitPositions, shipPositions) {
  let board = createBoardWithCells();

  if (hitPositions !== undefined) addHitClasses(hitPositions, board);

  if (shipPositions !== undefined) addShipClasses(shipPositions, board);

  return board;
}

function createBoardWithCells() {
  let board = createBoard();
  add100CellsTo(board);
  return board;

  function createBoard() {
    let board = document.createElement("div");
    board.classList.add("board");
    return board;
  }

  function add100CellsTo(board) {
    const NUM_OF_CELLS = 100;
    for (let i = 1; i <= NUM_OF_CELLS; i++) {
      let newCell = createCell();
      updateCellAttributePositions(newCell, i)
      board.append(newCell);
    }

    function createCell() {
      let newCell = document.createElement("div");
      newCell.classList.add("cell");
      return newCell;
    }

    function updateCellAttributePositions(cell, number) {
      let xValue = number % 10
      if (xValue === 0)
        xValue = 10

      let yValue = 10 - Number.parseInt(number / 10)
      if (number % 10 === 0)
        yValue = yValue + 1

      cell.setAttribute('data-x', xValue)
      cell.setAttribute('data-y', yValue)
    }
  }
}

function addHitClasses(hitPositions, board) {
  addClassToPositions("hit", hitPositions, board);
}

function addShipClasses(shipPositions, board) {
  addClassToPositions("ship", shipPositions, board);
}

function addClassToPositions(classToAdd, pointList, board) {
  pointList.forEach((x, y) => {
    getCell(x, y, board).classList.add(classToAdd);
  })

  // One based index. origin is bottom left
  function getCell(x, y, board) {
    let cell = board.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    return cell;
  }
}

export default drawBoardFromGameboard
