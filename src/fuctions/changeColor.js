export const changeColor = (
  bord,
  changeColorList,
  dispatch,
  currentcolor,
  row,
  column
) => {
  const copy = JSON.parse(JSON.stringify(bord));

  for (const key in changeColorList) {
    const array = changeColorList[key];
    if (array.length) {
      for (const obj of array) {
        copy[obj.row][obj.column] = currentcolor;
      }
    }
  }
  copy[row][column] = currentcolor;
  dispatch({ type: "CHANGE_BORD", bord: copy });
  dispatch({ type: "UPDATE_HISTORY", bord: copy });
};
