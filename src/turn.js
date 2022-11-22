function allowOneCellToBeHit(DOMBoard, ObjBoard) {
  let allCells = [...DOMBoard.querySelectorAll(".cell")];
  addHitFunctionToAll();

  let cellHasBeenHitResolvePromise;
  return new Promise((resolve) => {
    cellHasBeenHitResolvePromise = resolve;
  });

  function hitFunction(e) {
    e.target.classList.add("hit");
    updateObjBoard();
    removeHitFunctionFromAll();
    cellHasBeenHitResolvePromise();

    function updateObjBoard() {
      let x = Number.parseInt(e.target.getAttribute("data-x"));
      let y = Number.parseInt(e.target.getAttribute("data-y"));
      ObjBoard.hit(x, y);
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
