function Ship(length) {
  return (function () {
    let hitCounter = 0;
    return {
      isSunk: () => hitCounter >= length,
      hit: () => {
        hitCounter++;
        return undefined;
      },
      length,
    };
  })();
}

export default Ship;
