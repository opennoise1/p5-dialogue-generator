import React from "../_snowpack/pkg/react.js";
import {boxFinder} from "../utils/boxFinder.js";
const BoxMenu = ({char, font, boxFont, selection, setSelection, setBox}) => {
  const options = boxFinder(char);
  const switchBox = (e) => {
    setSelection(e.target.value);
    setBox(`../images/boxes/db-${selection}-${boxFont}.png`);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "menuDivs"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menuLabels"
  }, "Box: "), /* @__PURE__ */ React.createElement("select", {
    id: "boxMenu",
    className: "menuOptions knife",
    value: selection,
    onChange: switchBox
  }, options));
};
export default BoxMenu;
