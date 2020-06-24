import { createStore } from "redux";

const initialStore = {
  bord: [
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "w", "b", "e", "e", "e"],
    ["e", "e", "e", "b", "w", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
  ],
  history: [
    [
      ["e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "w", "b", "e", "e", "e"],
      ["e", "e", "e", "b", "w", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e"],
    ],
  ],
  currentStone: "b",
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "CHANGE_STONE":
      return { ...store, currentStone: action.color };
    case "CHANGE_BORD":
      return { ...store, bord: action.bord };
    case "UPDATE_HISTORY":
      return { ...store, history: store.history.concat(action.bord) };
    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;
