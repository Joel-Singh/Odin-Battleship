function drawBoardFromGameboard(board) {
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
    for (let i = 0; i < NUM_OF_CELLS; i++) {
      let newCell = createCell();
      board.append(newCell);
    }

    function createCell() {
      let newCell = document.createElement("div");
      newCell.classList.add("cell");
      return newCell;
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
    let cellNumber = (100 - (10 * y)) + x;
    let cell = board.querySelector(`:scope :nth-child(${cellNumber})`);
    return cell;
  }
}

export { drawBoard, drawBoardFromGameboard };
