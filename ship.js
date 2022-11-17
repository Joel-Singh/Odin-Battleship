function Ship(length) {
  return (function () {
    let hitCounter = 0;
    return {
      isSunk: () => hitCounter >= length,
      hit: () => {
        hitCounter++;
        return undefined;
      },
    };
  })();
}

export default Ship;
