import drawBoard from "./drawBoard";

function allowOneCellToBeHit(DOMBoard, ObjBoard) {
  let allCells = [...DOMBoard.querySelectorAll(".cell")];
  addHitFunctionToAll();

  let cellHasBeenHitResolvePromise;
  return new Promise((resolve) => {
    cellHasBeenHitResolvePromise = resolve;
  });

  function hitFunction(e) {
    updateBoards()
    removeHitFunctionFromAll();

    cellHasBeenHitResolvePromise();

    function updateBoards() {
      updateObjBoard()
      updateDOMBoard()

      function updateObjBoard() {
        let x = Number.parseInt(e.target.getAttribute("data-x"));
        let y = Number.parseInt(e.target.getAttribute("data-y"));
        ObjBoard.hit(x, y);
      }

      function updateDOMBoard() {
        e.target.classList.add('hit')
      }
    }
  }

  function addHitFunctionToAll() {
    allCells.forEach((cell) => cell.addEventListener("click", hitFunction));
  }

  function removeHitFunctionFromAll() {
    allCells.forEach((cell) => cell.removeEventListener("click", hitFunction));
  }
}

export { allowOneCellToBeHit };
