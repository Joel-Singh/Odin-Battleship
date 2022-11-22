function allowOneCellToBeHit(domBoard, objBoard) {
  let allCells = [...domBoard.querySelectorAll(".cell")];
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
        objBoard.hit(x, y);
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
