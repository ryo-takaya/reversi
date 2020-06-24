import React from "react";
import Bord from "./components/Bord";
import { Provider } from "react-redux";
import store from "./redux/store";
import ColorBord from "./components/ColorBord";

function App() {
  return (
    <Provider store={store}>
      <div style={{ height: "100vh", position: "relative" }}>
        <ColorBord />
        <Bord />
      </div>
    </Provider>
  );
}

export default App;
