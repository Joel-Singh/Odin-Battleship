function Gameboard() {
  return (function () {
    function isHit(x, y) {
      return this[`${x}${y} isHit`] ? true : false;
    }
    function hit(x, y) {
      this[`${x}${y} isHit`] = true;
    }
    return { isHit, hit };
  })();
}

export default Gameboard;
