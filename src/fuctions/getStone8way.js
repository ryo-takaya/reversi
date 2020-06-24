export const getStone8way = (row, column, bord, currentcolor) => {
  const enemy = currentcolor === "b" ? "w" : "b";
  const funcs = [
    getUp,
    getUpRight,
    getRight,
    getDownRight,
    getDown,
    getDownLeft,
    getLeft,
    getUpLeft,
  ];
  const result = {
    up: [],
    upRight: [],
    Right: [],
    downRight: [],
    down: [],
    downLeft: [],
    Left: [],
    upLeft: [],
  };
  let i = 0;
  for (const key in result) {
    result[key] = funcs[i](row, column, bord, currentcolor, enemy);
    i++;
  }

  return result;
};
const getUp = (row, column, bord, currentcolor, enemy) => {
  const up = [];
  for (row--; 0 <= row; row--) {
    up.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of up) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};

const getUpRight = (row, column, bord, currentcolor, enemy) => {
  const upRight = [];
  for (row--, column++; 0 <= row && column >= 7; row--, column++) {
    upRight.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of upRight) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};
const getRight = (row, column, bord, currentcolor, enemy) => {
  const Right = [];
  for (column++; column <= 7; column++) {
    Right.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of Right) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};
const getDownRight = (row, column, bord, currentcolor, enemy) => {
  const downRight = [];
  for (row++, column++; 7 >= row && column <= 7; row++, column++) {
    downRight.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of downRight) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};

const getDown = (row, column, bord, currentcolor, enemy) => {
  const down = [];
  for (row++; 7 >= row; row++) {
    down.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of down) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};

const getDownLeft = (row, column, bord, currentcolor, enemy) => {
  const downLeft = [];
  for (row++, column--; 7 >= row && column >= 0; row++, column--) {
    downLeft.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of downLeft) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};

const getLeft = (row, column, bord, currentcolor, enemy) => {
  const Left = [];
  for (column--; column >= 0; column--) {
    Left.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of Left) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};

const getUpLeft = (row, column, bord, currentcolor, enemy) => {
  const upLeft = [];
  for (row--, column--; 0 <= row && column >= 0; row--, column--) {
    upLeft.push({ color: bord[row][column], location: { row, column } });
  }

  const result = [];

  for (const stone of upLeft) {
    if (stone.color === enemy) {
      result.push(stone.location);
    } else if (stone.color === "e") {
      return [];
    } else if (stone.color === currentcolor) {
      return result;
    }
  }
  return [];
};
