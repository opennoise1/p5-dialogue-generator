import React, {useState} from "./_snowpack/pkg/react.js";
import Image from "./components/Image.js";
import TextAndTools from "./components/TextAndTools.js";
const App = () => {
  const [portrait, setPortrait] = useState("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Image, null), /* @__PURE__ */ React.createElement(TextAndTools, {
    setPortrait
  }));
};
export default App;
